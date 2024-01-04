// HomeStack.js

import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import InboxScreen from '../screens/InboxScreen';

const Stack = createStackNavigator();

const InboxStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerMode: 'float'
  }}>
      <Stack.Screen name="inbox" component={InboxScreen} />
    </Stack.Navigator>
  );
};

export default InboxStack;
