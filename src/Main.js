import { StyleSheet, Switch, Text, View } from 'react-native';
import React from 'react';
import { useAppContext } from './context/AppContext';
import { COLORS } from './constants/Colors';
import RootNavigator from './navigation/RootNavigator';

const Main = () => {
  const { isDarkMode, toggleTheme } = useAppContext();
  console.log(isDarkMode);
  const theme = isDarkMode ? COLORS.dark : COLORS.light;
  return <RootNavigator />;
};

export default Main;

const styles = StyleSheet.create({});
