import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is tab1 </Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is tab2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is tab3</Text>
    </View>
  );
};

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
        name={'Tab1'}
        component={Tab1}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={' Photos'} isFocused={focused} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        component={Tab2}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={'Vidoes'} isFocused={focused} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        component={Tab3}
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
