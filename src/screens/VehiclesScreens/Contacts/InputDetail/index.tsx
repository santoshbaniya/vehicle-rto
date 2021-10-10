import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {Searchbar} from 'react-native-paper';

export const DetailComponent = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.search}>
        <Searchbar placeholder="Search by name" />
      </View> */}
      <Text style={styles.text}>hey</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
  },
});
