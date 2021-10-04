import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';

import styles from '../styles';
import TaskCard from './TaskCard';

const DATA = [
  {
    id: 1,
    image: require('../../../../assets/America.png'),
    title: 'English',
    icon: 'angle-right',
  },
  {
    id: 2,
    image: require('../../../../assets/ghurati.jpg'),
    title: 'Ghurati',
    icon: 'angle-right',
  },
  {
    id: 3,
    image: require('../../../../assets/tajMahal.png'),
    title: 'Hindi',
    icon: 'angle-right',
  },
  {
    id: 4,
    image: require('../../../../assets/marathi.webp'),
    title: 'Marathi ',
    icon: 'angle-right',
  },
];

const LanguageScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlistViewer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          keyExtractor={(item, index) => item.title + index.toString()}
          renderItem={({item}) => (
            <TaskCard image={item.image} title={item.title} icon={item.icon} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;
