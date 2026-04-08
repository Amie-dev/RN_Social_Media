/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Switch } from 'react-native-gesture-handler';
import { useAppContext } from '../context/AppContext';
import { COLORS } from '../constants/Colors';
import Story from '../components/HomeComponents/Story';
import Post from '../components/HomeComponents/Post';

const HomeScreen = () => {
  const { isDarkMode, toggleTheme } = useAppContext();
  const theme = isDarkMode ? COLORS.dark : COLORS.light;
  return (
    <View
      style={{
        backgroundColor: `${theme.background}`,
        flex: 1,
      }}
    >
      <Story/>
      <Post/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
