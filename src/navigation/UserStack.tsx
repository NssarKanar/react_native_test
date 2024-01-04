// HomeStack.js

import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from '../screens/UserProfileScreen';

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerMode: 'float'
  }}>
      <Stack.Screen name="userPofile" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};

export default UserStack
