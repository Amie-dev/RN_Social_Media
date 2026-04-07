/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { COLORS } from '../../constants/Colors';
import Ionicons from '@react-native-vector-icons/ionicons';

const HomeHeader = ({ navigation, route, options }) => {
  const { isDarkMode, toggleTheme } = useAppContext();
  const theme = isDarkMode ? COLORS.dark : COLORS.light;
  return (
    <View
      style={{
        height: 60,
        backgroundColor: `${theme.headerBackground}`,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,

        justifyContent: 'space-between',
        padding: 12,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        {/* 🔥 Drawer Toggle Button */}
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Text style={{ color: `${theme.headerText}`, fontSize: 18 }}>☰</Text>
        </TouchableOpacity>

        {/* 🔹 Title */}
        <Text
          style={{
            color: `${theme.headerText}`,
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
          }}
        >
          {options.title || route.name}
        </Text>
      </View>

      <View>
        {/* <Text
          style={{
            fontSize: 14,
            color: '#fff',
          }}
        >
          {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
        </Text> */}

        {/* <Ionicons
        name={!isDarkMode ? 'moon' : 'sunny'}
        onPress={toggleTheme}
        size={21}
        color={isDarkMode ? '#c7a109' : '#faa005'}
      /> */}

        <TouchableOpacity onPress={toggleTheme}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}
          >
            {!isDarkMode ? '🌙' : '☀️'}
          </Text>
        </TouchableOpacity>

        {/* Switch
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: '#d1d5db', true: '#2563eb' }}
          thumbColor={isDarkMode ? '#ffffff' : '#ffffff'}
        /> */}
      </View>
    </View>
  );
};

export default HomeHeader;
