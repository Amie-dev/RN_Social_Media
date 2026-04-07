import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from '../TabNavigator/TabNavigator';
import DrawerContent from '../../components/DrawerContent';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
