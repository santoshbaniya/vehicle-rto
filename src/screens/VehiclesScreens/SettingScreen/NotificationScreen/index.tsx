import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from 'utils/color';
import {rs} from 'utils/ResponsiveSize';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text>Show notifications</Text>
      </View>
    </View>
  );
};
export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
    padding: rs(18),
  },
  headerView: {
    backgroundColor: '#fff',
    borderRadius: rs(18),
    padding: rs(12),
  },
});
