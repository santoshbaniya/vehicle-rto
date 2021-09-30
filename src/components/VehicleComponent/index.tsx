import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../VehicleComponent/styles';

const DATA = [
  {
    id: 1,
    icon: 'motorcycle',
    name: 'Bike',
    goTo: 'Setting',
    color: 'red',
  },
  {
    id: 2,
    icon: 'car',
    name: 'Car',
    goTo: 'Setting',
    color: 'black',
  },
  {
    id: 3,
    icon: 'credit-card',
    name: 'Liscence',
    goTo: 'Setting',
    color: 'yellow',
  },
  {
    id: 4,
    icon: 'truck',
    name: 'Others',
    goTo: 'Setting',
    color: 'blue',
  },
];

const Item = ({name, icon, item}) => (
  <TouchableOpacity style={styles.container}>
    <View style={[styles.componentContainer, {backgroundColor: item.color}]}>
      <FontAwesome name={icon} size={50} color="#8a2be2" />
      <Text style={styles.name}>{name}</Text>
      <FontAwesome style={{}} name="angle-right" size={24} />
    </View>
  </TouchableOpacity>
);

export const VehicleComponent = () => {
  const renderItem = ({item}) => (
    <Item name={item.name} icon={item.icon} goTo={item.goTo} />
  );
  return (
    <TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </TouchableOpacity>
  );
};
