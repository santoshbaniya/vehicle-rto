import React from 'react';

import MainTabs from 'src/navigation/Maintabs';
import MyStack from 'src/navigation/Stacktabs';
import HomeScreen from 'src/screens/VehiclesScreens/HomeScreen';
import {UserDetailScreen} from 'src/screens/VehiclesScreens/UserDetail';
import SettingScreen from 'src/screens/VehiclesScreens/SettingScreen';
import LanguageScreen from 'src/screens/VehiclesScreens/SettingScreen/LanguageScreen';
import Contact from 'screens/VehiclesScreens/Contacts';

export default () => {
  return (
    <>
      <MyStack />
    </>
  );
};
