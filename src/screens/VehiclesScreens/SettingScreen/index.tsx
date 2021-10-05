import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';

import SettingComponent from './SettingComnponent';

const SettingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(null);

  const saveSetting = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  const SettingOptions = [
    {
      image: require('assets/notification.png'),
      title: 'Notifications',
      icon: 'angle-right',
      onPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: changeLanguage,
      image: require('assets/changeLanguage.png'),
      title: 'Change Language',
      icon: 'angle-right',
      onPress: () => {
        setModalVisible(true);
      },
    },
    {
      image: require('assets/clearHistory.png'),
      title: 'Clear History',
      icon: 'angle-right',
      onPress: () => {},
    },
    {
      id: 'Off',
      image: require('assets/adsRemove.png'),
      title: 'Remove Ads',
      icon: 'angle-right',
      onPress: () => {},
    },
    {
      image: require('assets/favourite.png'),
      title: 'Favourite Vehicles',
      icon: 'angle-right',
      onPress: () => {},
    },
    {
      image: require('assets/privacy.png'),
      title: 'Privacy Policy',
      icon: 'angle-right',
      onPress: () => {},
    },
  ];
  const LanguageOptions = [
    {
      option: 'English',
      selected: changeLanguage === 'English',
      onPress: () => {
        saveSetting('sortBy', 'English');
        setChangeLanguage('English');
        setModalVisible(false);
      },
    },
    {
      option: 'Hindi',
      selected: changeLanguage === 'Hindi',
      onPress: () => {
        saveSetting('sortBy', 'Hindi');
        setChangeLanguage('Hindi');
        setModalVisible(false);
      },
    },
  ];

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setChangeLanguage(sortPref);
    }
  };
  useEffect(() => {
    getSettings();
  }, []);
  return (
    <SettingComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      SettingOptions={SettingOptions}
      LanguageOptions={LanguageOptions}
    />
  );
};

export default SettingScreen;
