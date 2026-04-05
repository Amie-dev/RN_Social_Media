import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/AuthScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            headerShown: false,
            title: 'Auth Screen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
