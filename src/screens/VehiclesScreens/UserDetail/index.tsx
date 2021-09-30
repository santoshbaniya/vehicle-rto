import React from 'react';
import {Text, SafeAreaView, FlatList, View} from 'react-native';

import styles from './styles';

const DATA = [
  {
    id: 1,
    title: 'Registration No.',
    result: 'GJ05z001',
  },
  {
    id: 2,
    title: 'Status',
    result: 'Active',
  },
  {
    id: 3,
    title: 'Owner Name',
    result: 'VIMAl',
  },
  {
    id: 4,
    title: 'Son / Daughter / Wife of',
    result: 'RANJITLAL DARUWALA',
  },
  {
    id: 5,
    title: 'Model Name',
    result: 'RE 145',
  },
  {
    id: 6,
    title: 'Marker Name',
    result: 'BAJAJ AUTO LTD',
  },
  {
    id: 7,
    title: 'Vehicle Class',
    result: 'Three Wheeler (Passenger)(3WT)',
  },
  {
    id: 8,
    title: 'Fuel Type',
    result: 'PETROL/CNG',
  },
  {
    id: 9,
    title: 'Engine Number',
    result: 'GJ05ZZXXXX',
  },
  {
    id: 10,
    title: 'Registration Date',
    result: '13-Mar-2006',
  },
  {
    id: 11,
    title: 'Vehicle Age',
    result: '15 Years 6 Months and 16 Days',
  },
  {
    id: 12,
    title: 'Registering Authority',
    result: 'SURAT, Gujarat',
  },
  {
    id: 13,
    title: 'Fitness Upto',
    result: '07-Nov-2013',
  },
  {
    id: 14,
    title: 'Insurance Company',
    result: 'SHRIRAM GENERAL INSURANCE CO LTD',
  },
  {
    id: 15,
    title: 'Insurance Policy No.',
    result: '06691',
  },
  {
    id: 16,
    title: 'Insurance Valid Up To',
    result: '07-Nov-2013',
  },
];

interface IMenuItem {
  id: number;
  title: string;
  result: string;
}
const Item = ({item: {title, result}}: {item: IMenuItem}) => (
  <View style={styles.flatlistContainer}>
    <Text style={styles.flatlistTitle}>{title}</Text>
    <Text style={styles.flatlistTitle}>{result}</Text>
  </View>
);
export const UserDetailScreen = () => {
  const renderItem = ({item}: {item: IMenuItem}) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
