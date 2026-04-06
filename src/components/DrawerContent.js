import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useAppContext } from '../context/AppContext';
import { COLORS } from '../constants/Colors';
import { Auth } from '../services/AuthAPI';



const DrawerItem = ({ icon, label, onPress, theme }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Ionicons name={icon} size={20} color={theme.text} />
      <Text style={[styles.label, { color: theme.text }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};


const DrawerContent = (props) => {
  const { navigation } = props;
  const { isDarkMode, toggleTheme, logout, user,token } = useAppContext();

  const theme = isDarkMode ? COLORS.dark : COLORS.light;
  console.log("custom drawer user",user)

  const handleLogout=async()=>{
    try {
      const res = await Auth.logout(token);
      console.log('logout response', res);
      await logout()
    } catch (error) {
      
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      {/* 🔥 Profile Section */}
      <View style={styles.profile}>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/150?img=12',
          }}
          style={styles.avatar}
        />

        <Text style={[styles.name, { color: theme.text }]}>
          {user?.username || 'Guest'}
        </Text>

        <Text style={[styles.email, { color: theme.textSecondary }]}>
          @{user?.username || 'username'}
        </Text>
      </View>

      {/* 🔥 Menu Items */}
      <View style={styles.menu}>

        <DrawerItem
          icon="home-outline"
          label="Home"
          onPress={() => navigation.navigate('Home')}
          theme={theme}
        />

        <DrawerItem
          icon="person-outline"
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
          theme={theme}
        />

        <DrawerItem
          icon="settings-outline"
          label="Settings"
          onPress={() => navigation.navigate('Settings')}
          theme={theme}
        />
      </View>

      {/* 🔥 Bottom Section */}
      <View style={styles.bottom}>

        {/* Theme Toggle */}
        <TouchableOpacity
          style={styles.row}
          onPress={toggleTheme}
        >
          <Ionicons
            name={isDarkMode ? 'moon' : 'sunny'}
            size={20}
            color={theme.text}
          />
          <Text style={[styles.label, { color: theme.text }]}>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity
          style={styles.row}
          onPress={logout}
        >
          <Ionicons name="log-out-outline" size={20} color="red" />
          <Text style={[styles.label, { color: 'red' }]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerContent;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  profile: {
    alignItems: 'center',
    marginBottom: 30,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  email: {
    fontSize: 13,
  },

  menu: {
    flex: 1,
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 12,
  },

  label: {
    fontSize: 15,
    fontWeight: '500',
  },

  bottom: {
    borderTopWidth: 1,
    borderTopColor: '#374151',
    paddingTop: 15,
  },
});