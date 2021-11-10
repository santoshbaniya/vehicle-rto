import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface IMenuItems {
  route: any;
  navigation: any;
}

const UserInputScreen = ({route}: IMenuItems) => {
  return (
    <View style={styles.container}>
      <Text>{route.params?.data}</Text>
    </View>
  );
};
export default UserInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
