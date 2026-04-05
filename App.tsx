import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { AppContextProvider, useAppContext } from './src/context/AppContext';
import Main from './src/Main';
import { COLORS } from './src/constants/Colors';
import AuthStack from './src/navigation/AuthStack/AuthStack';

function App() {
  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <AppContent />
      </AppContextProvider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const { isDarkMode, isAuthenticated ,loading} = useAppContext(); // ✅ now it's inside provider
  const theme = isDarkMode ? COLORS.dark : COLORS.light;
  console.log('isAuthenticated', isAuthenticated);

   

  // ✅ Loading Screen
  if (loading) {
    return (
      <View
        style={[
          styles.loaderContainer,
          { backgroundColor: theme.background ,flex:1},
        ]}
      >
        <ActivityIndicator size="large" color={theme.primary} />

        <Text style={[styles.loadingText, { color: theme.text }]}>
          Loading your experience...
        </Text>
      </View>
    );
  }

  // ✅ Auth Flow
  if (!isAuthenticated) {
    return <AuthStack />;
  }

  // ✅ Main App

  return (
    <View
      style={[styles.container, { backgroundColor: `${theme.background}` }]}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? `${theme.background}` : '#fff'}
      />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  loaderContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

loadingText: {
  marginTop: 15,
  fontSize: 14,
  opacity: 0.8,
},
});

export default App;
