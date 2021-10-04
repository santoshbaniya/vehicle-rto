import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  SectionList,
  FlatList,
  Button,
} from 'react-native';

import styles from './styles';
import {rs} from 'utils/ResponsiveSize';
import Feather from 'react-native-vector-icons/FontAwesome';
import TaskCard from './TaskCard';

const DATA = [
  {
    title: 'Vehicle Owners,  Challan & Liscence Details',
    data: [
      {
        name: 'Bike',
        color: '#afeeee',
        image: require('assets/bikee.png'),
        screen: 'Vehicle Detail',
      },
      {
        name: 'car',
        color: '#ffdab9',
        image: require('assets/car.png'),
        screen: 'Vehicle Detail',
      },
      {
        name: 'Truck',
        color: '#ffe4b5',
        image: require('assets/truck.png'),
        screen: 'Vehicle Detail',
      },
      {
        name: 'Liscence',
        color: '#b0c4de',
        image: require('assets/liscences.png'),
        screen: 'Vehicle Detail',
      },
    ],
  },
  {
    title: 'RTO All Details',
    data: [
      {
        name: 'RTO Info',
        color: '#7fffd4',
        image: require('assets/rto.png'),
        screen: 'Vehicle Detail',
      },
      {
        name: 'Traffic Sign',
        color: '#f5f5dc',
        image: require('assets/traffic_sign.png'),
        screen: 'Vehicle Detail',
      },
      {
        name: 'RTO Que',
        color: '#e0ffff',
        image: require('assets/queue.png'),
        screen: 'Vehicle Detail',
      },
      {
        name: 'Prepare',
        color: '#fafad2',
        image: require('assets/exam.png'),
        screen: 'Vehicle Detail',
      },
    ],
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={{width: rs(40), height: rs(40)}}
          source={require('assets/profilee.png')}
        />

        <Feather name="reorder" size={24} style={styles.barIcon} />
      </View>
      <Text style={styles.header}>Welcome!</Text>
      <View style={styles.mainContainer}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={DATA}
          renderItem={({}) => {
            return null;
          }}
          renderSectionHeader={({section}) => (
            <>
              <Text style={styles.titleDesign}>{section.title}</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={section.data}
                horizontal
                renderItem={({item}) => (
                  <TaskCard navigation={navigation} item={item} />
                )}
              />
            </>
          )}
        />
      </View>

      <Button
        title="Navigate to detail screen"
        color="#fff"
        onPress={() => navigation.navigate('User Details')}
      />
      <Button
        title="Navigate to Vehicle info"
        color="#fff"
        onPress={() => navigation.navigate('Vehicle Detail')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
