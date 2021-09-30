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
import styles from '../styles';

const DATA = [
  {
    id: 1,
    image: require('../../../../assets/notification.png'),
    title: 'English',
    icon: 'angle-right',
  },
  {
    id: 2,
    image: require('../../../../assets/notification.png'),
    title: 'Ghurati',
    icon: 'angle-right',
  },
  {
    id: 3,
    image: require('../../../../assets/favourite.png'),
    title: 'Hindi',
    icon: 'angle-right',
  },
  {
    id: 4,
    image: require('../../../../assets/clearHistory.png'),
    title: 'Marathi ',
    icon: 'angle-right',
  },
  {
    id: 5,
    image: require('../../../../assets/adsRemove.png'),
    title: 'Urdu',
    icon: 'angle-right',
  },
];

interface IMenuItem {
  id: number;
  title: string;
  image: ImageSourcePropType;
  icon: string;
  color: string;
}

const Item = ({item: {image, title, icon, color}}: {item: IMenuItem}) => (
  <TouchableOpacity style={styles.flatlistContainer}>
    <View style={[styles.imageConatiner, {backgroundColor: color}]}>
      <Image style={styles.flatlistImage} source={image} />
    </View>
    <Text style={styles.flatlistTitle}>{title}</Text>
    <Feather name={icon} size={24} style={styles.iconDesign} />
  </TouchableOpacity>
);

const LanguageScreen = () => {
  const renderItem = ({item}: {item: IMenuItem}) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Change Language</Text>
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

export default LanguageScreen;
