// HomeStack.js

import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerMode: 'float'
  }}>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
