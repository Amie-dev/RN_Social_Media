import { StatusBar, StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { AppContextProvider, useAppContext } from './src/context/AppContext';
import Main from './src/Main';
import { COLORS } from './src/constants/Colors';

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
  const { isDarkMode } = useAppContext(); // ✅ now it's inside provider
  const theme = isDarkMode ? COLORS.dark : COLORS.light;

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
  },
});

export default App;
