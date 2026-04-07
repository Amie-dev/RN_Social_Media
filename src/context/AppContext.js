import { createContext, useContext, useEffect, useState } from 'react';
import { COLORS } from '../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from '../services/AuthAPI';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used inside Provider');
  }
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load theme
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Theme
        const themeValue = await AsyncStorage.getItem('isDark');
        setIsDarkMode(themeValue === 'true');

        // Token
        const savedToken = await AsyncStorage.getItem('token');
        if (!savedToken) {
          setLoading(false);
          return;
        }

        const parsedToken = JSON.parse(savedToken);

        // API call
        const res = await Auth.Current_User(parsedToken);
        console.log('Current User as res:', res);

        const currentUser = res?.data?.data || res?.data?.user || res?.data;
        console.log('Current User as resData:', res?.data);
        console.log('Current User as currentUser:', currentUser);
        if (currentUser) {
          setUser(currentUser);
          setToken(parsedToken);
          await AsyncStorage.setItem('user', JSON.stringify(currentUser));
          console.log(
            'Current User in user:',
            user,
          ); /* why give null this line */
        } else {
          await logout();
        }
      } catch (error) {
        console.log('Init error:', error);
        await logout();
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Save theme
  useEffect(() => {
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem('isDark', isDarkMode.toString()); // ✅ string
      } catch (error) {
        console.log('Error saving theme', error);
      }
    };

    saveTheme();
  }, [isDarkMode]);

  //✅ save login data

  const saveLoginData = async (userData, tokenData) => {
    console.log('called savelogindata');
    setUser(userData); // ✅ FIXED
    setToken(tokenData);

    await AsyncStorage.setItem('user', JSON.stringify(userData));
    await AsyncStorage.setItem('token', JSON.stringify(tokenData));
  };

  // ✅ LOGOUT
  const logout = async token => {
    try {
      // const res = await Auth.logout(token);
      // console.log('logout response', res);

      setUser(null);
      setToken(null);

      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('token');
    } catch (error) {}
  };

  // logout(token)

  // ✅ Theme object
  const theme = isDarkMode ? COLORS.dark : COLORS.light;

  // ✅ Toggle function
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  useEffect(() => {}, [user, token]);
  const isAuthenticated = !!token && !!user;

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        toggleTheme,
        theme, // 🔥 important
        isAuthenticated,
        saveLoginData,
        logout,
        loading,
        user
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
