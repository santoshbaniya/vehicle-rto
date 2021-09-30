import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  SectionList,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';

import styles from './styles';
import {rs} from '../../../utils/ResponsiveSize';
import Feather from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    title: 'Vehicle Owners,  Challan & Liscence Details',
    data: [
      {
        name: 'Bike',
        color: '#afeeee',
        image: require('../../../assets/bikee.png'),
      },
      {
        name: 'car',
        color: '#ffdab9',
        image: require('../../../assets/car.png'),
      },
      {
        name: 'Truck',
        color: '#ffe4b5',
        image: require('../../../assets/truck.png'),
      },
      {
        name: 'Liscence',
        color: '#b0c4de',
        image: require('../../../assets/liscences.png'),
      },
    ],
  },
  {
    title: 'RTO All Details',
    data: [
      {
        name: 'RTO Info',
        color: '#7fffd4',
        image: require('../../../assets/rto.png'),
      },
      {
        name: 'Traffic Sign',
        color: '#f5f5dc',
        image: require('../../../assets/traffic_sign.png'),
      },
      {
        name: 'RTO Que',
        color: '#e0ffff',
        image: require('../../../assets/queue.png'),
      },
      {
        name: 'Prepare',
        color: '#fafad2',
        image: require('../../../assets/exam.png'),
      },
    ],
  },
];

const ListItem = ({item}) => (
  <TouchableOpacity style={styles.sectionContainer}>
    <View style={styles.listDesign}>
      <View style={[styles.imageContainer, {backgroundColor: item.color}]}>
        <Image source={item.image} style={{width: rs(32), height: rs(32)}} />
      </View>
    </View>
    <Text style={styles.vehicleName}>{item.name}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={{width: rs(40), height: rs(40)}}
          source={require('../../../assets/profilee.png')}
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
                renderItem={({item}) => <ListItem item={item} />}
              />
            </>
          )}
        />
      </View>
      <Button
        title="Navigate"
        color="#fff"
        onPress={() => navigation.navigate('User Details')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
