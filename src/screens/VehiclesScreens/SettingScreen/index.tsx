import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import TaskCard from './Component/TaskCard';

const DATA = [
  {
    id: 1,
    image: require('../../../assets/notification.png'),
    title: 'Notifications',
    icon: 'angle-double-right',
    screens: 'Change Language',
  },
  {
    id: 2,
    image: require('../../../assets/changeLanguage.png'),
    title: 'Change Language',
    icon: 'angle-right',
    screens: 'Change Language',
  },
  {
    id: 3,
    image: require('../../../assets/clearHistory.png'),
    title: 'Clear History',
    icon: 'angle-right',
    screens: 'Change Language',
  },
  {
    id: 4,
    image: require('../../../assets/adsRemove.png'),
    title: 'Remove Ads',
    icon: 'angle-right',
    screens: 'Change Language',
  },
  {
    id: 5,
    image: require('../../../assets/favourite.png'),
    title: 'Favourite Vehicles',
    icon: 'angle-right',
    screens: 'Change Language',
  },
  {
    id: 6,
    image: require('../../../assets/privacy.png'),
    title: 'Privacy Policy',
    icon: 'angle-right',
    screens: 'Change Language',
  },
];

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          keyExtractor={(item, index) => item.title + index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screens)}>
              <TaskCard
                picture={item.image}
                title={item.title}
                icon={item.icon}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
