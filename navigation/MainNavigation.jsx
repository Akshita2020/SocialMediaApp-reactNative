import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Photos'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={'Photos'} isFocused={focused} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name={'Videos'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={'Videos'} isFocused={focused} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name={'Saved'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={'Saved'} isFocused={focused} />
          ),
        }}
      />
    </ProfileTabs.Navigator>
  );
};

function MainMenuNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
}

function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
