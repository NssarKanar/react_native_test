// HomeStack.js

import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import InboxScreen from '../screens/InboxScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const StoreStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerMode: 'float'
  }}>
      <Stack.Screen name="cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StoreStack
