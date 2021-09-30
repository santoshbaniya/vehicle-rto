import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

import Feather from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const DATA = [
  {
    id: 1,
    image: require('../../../assets/changeLanguage.png'),
    title: 'Change Language',
    icon: 'angle-right',
    color: '#afeeee',
    screens: 'Language',
  },
  {
    id: 2,
    image: require('../../../assets/notification.png'),
    title: 'Notifications',
    icon: 'angle-double-right',
    color: '#ffdab9',
    screens: 'Language',
  },

  {
    id: 4,
    image: require('../../../assets/clearHistory.png'),
    title: 'Clear History',
    icon: 'angle-right',
    color: '#b0c4de',
    screens: 'Language',
  },
  {
    id: 5,
    image: require('../../../assets/adsRemove.png'),
    title: 'Remove Ads',
    icon: 'angle-right',
    color: '#b0c4de',
    screens: 'Language',
  },
  {
    id: 3,
    image: require('../../../assets/favourite.png'),
    title: 'Favourite Vehicles',
    icon: 'angle-right',
    color: '#ffe4b5',
    screens: 'Language',
  },
  {
    id: 6,
    image: require('../../../assets/privacy.png'),
    title: 'Privacy Policy',
    icon: 'angle-right',
    color: '#b0c4de',
    screens: 'Language',
  },
];

interface IMenuItem {
  id: number;
  title: string;
  image: ImageSourcePropType;
  icon: string;
  color: string;
}

const Item = ({item: {image, title, icon}}: {item: IMenuItem}) => (
  <TouchableOpacity style={styles.flatlistContainer}>
    <View style={[styles.imageConatiner]}>
      <Image style={styles.flatlistImage} source={image} />
    </View>
    <Text style={styles.flatlistTitle}>{title}</Text>
    <Feather name={icon} size={24} style={styles.iconDesign} />
  </TouchableOpacity>
);

const SettingScreen = ({}) => {
  const renderItem = ({item}: {item: IMenuItem}) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
