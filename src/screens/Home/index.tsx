import React from 'react';
import {
  // View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  // FlatList,
  Text,
} from 'react-native';
// import {Searchbar} from 'react-native-paper';
// import {VehicleInfoCardScreen} from '../../components/BikeComponent';
import {VehicleComponent} from '../../components/VehicleComponent';
import {rs} from '../../utils/ResponsiveSize';

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#61dafb" />
      {/* <View style={styles.search}>
        <Searchbar placeholder="Search by name" />
      </View> */}
      <VehicleComponent />
      {/* <FlatList
        data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}]}
        renderItem={() => <VehicleInfoCardScreen />}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      /> */}
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Text>hellow world</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6fa',
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: rs(16),
  },
});
