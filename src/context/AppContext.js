import { createContext, useContext, useEffect, useState } from 'react';
import { COLORS } from '../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  // Load theme
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const value = await AsyncStorage.getItem('isDark');

        if (value !== null) {
          setIsDarkMode(value === 'true'); // ✅ convert to boolean
        }
      } catch (error) {
        console.log('Error loading theme', error);
      }
    };

    loadTheme();
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

  // ✅ Theme object
  const theme = isDarkMode ? COLORS.dark : COLORS.light;

  // ✅ Toggle function
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        toggleTheme,
        theme, // 🔥 important
      }}
    >
      {children}
    </AppContext.Provider>
  );
};