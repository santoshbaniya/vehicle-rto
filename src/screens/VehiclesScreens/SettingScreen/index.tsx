import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';

import SettingComponent from './SettingComnponent';

const SettingScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(null);
  const [clearHistory, setClearHistory] = useState(null);
  const [historyModalVisbile, setHistoryModalVisible] = useState(false);

  const saveSetting = (key, value) => {
    AsyncStorage.setItem(key, value);
  };
  const historySetting = (boolean, userSelected) => {
    AsyncStorage.setItem(boolean, userSelected);
  };

  const SettingOptions = [
    {
      image: require('assets/notification.png'),
      title: 'Notifications',
      icon: 'toggle-on',
      onPress: () => navigation.navigate('Notifications'),
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
      id: clearHistory,
      image: require('assets/clearHistory.png'),
      title: 'Clear History',
      icon: 'angle-right',
      onPress: () => {
        setHistoryModalVisible(true);
      },
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
        saveSetting('changeLanguage', 'English');
        setChangeLanguage('English');
        setModalVisible(false);
      },
    },
    {
      option: 'Hindi',
      selected: changeLanguage === 'Hindi',
      onPress: () => {
        saveSetting('changeLanguage', 'Hindi');
        setChangeLanguage('Hindi');
        setModalVisible(false);
      },
    },
  ];
  const HistoryOptions = [
    {
      boolean: 'Clear all data',
      userSelected: clearHistory === 'Yes',
      onPressForHistory: () => {
        historySetting('clearHistory', 'Yes');
        setClearHistory('Yes');
        setHistoryModalVisible(false);
      },
    },
    {
      boolean: 'Cancel',
      userSelected: clearHistory === 'No',
      onPressForHistory: () => {
        historySetting('clearHistory', 'No');
        setClearHistory('No');
        setHistoryModalVisible(false);
      },
    },
  ];

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('changeLanguage');
    if (sortPref) {
      setChangeLanguage(sortPref);
    }
    const sortHis = await AsyncStorage.getItem('clearHistory');
    if (sortHis) {
      setClearHistory(sortHis);
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
      HistoryOptions={HistoryOptions}
      historyModalVisbile={historyModalVisbile}
      setHistoryModalVisible={setHistoryModalVisible}
    />
  );
};

export default SettingScreen;
