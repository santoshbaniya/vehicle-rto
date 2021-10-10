import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from './Maintabs';
import {NavigationContainer} from '@react-navigation/native';
import Colors from '../utils/color';
import Font from '../utils/fonts';

import LanguageScreen from '../screens/VehiclesScreens/SettingScreen/LanguageScreen';
import {UserDetailScreen} from '../screens/VehiclesScreens/UserDetail';
import VehicleDetailScreen from '../screens/BikeInfo';
import HistoryScreen from 'screens/VehiclesScreens/SettingScreen/HistoryScreen';
import NotificationScreen from 'screens/VehiclesScreens/SettingScreen/NotificationScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Vehicle"
          component={MainTabNavigator}
          options={{
            title: 'Vehicle',
            headerShown: false,
            headerStyle: {
              backgroundColor: Colors.Background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen name="Detail" component={MainTabNavigator} />
        <Stack.Screen
          name="User Details"
          options={{
            headerStyle: {
              backgroundColor: Colors.Background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: Font.MontserratBold,
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
          component={UserDetailScreen}
        />
        <Stack.Screen
          name="Change Language"
          options={{
            headerStyle: {
              backgroundColor: Colors.Background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: Font.MontserratBold,
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
          component={LanguageScreen}
        />
        <Stack.Screen
          name="Clear History"
          options={{
            headerStyle: {
              backgroundColor: Colors.Background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: Font.MontserratBold,
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
          component={HistoryScreen}
        />
        <Stack.Screen
          name="Notifications"
          options={{
            headerStyle: {
              backgroundColor: Colors.Background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: Font.MontserratBold,
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
          component={NotificationScreen}
        />
        <Stack.Screen name="Vehicle Detail" component={VehicleDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
