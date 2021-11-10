import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const UserScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>liscence_plate</Text>
      <Text>owner_name</Text>
      <Text>financer</Text>
      <Text>insurance_company</Text>
    </SafeAreaView>
  );
};
export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
