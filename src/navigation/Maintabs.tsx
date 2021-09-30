import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/VehiclesScreens/HomeScreen';
import SettingScreen from '../screens/VehiclesScreens/SettingScreen';

const Tab = createBottomTabNavigator();

interface MainTabsProps {}

const MainTabNavigator = ({}: MainTabsProps) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          }
          if (route.name === 'Setting') {
            iconName = 'gear';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
