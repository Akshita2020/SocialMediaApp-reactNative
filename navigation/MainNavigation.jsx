import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      intialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
