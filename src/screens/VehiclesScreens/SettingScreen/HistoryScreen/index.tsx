import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {rs} from 'utils/ResponsiveSize';
import Colors from 'utils/color';
import Font from 'utils/fonts';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.detail}>
        Are you sure you want to clear your History?
      </Text>
      <View style={styles.button}>
        <Button title="Yes" />
        <Button title="No" />
      </View>
    </View>
  );
};
export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: rs(22),
    padding: rs(18),
    alignItems: 'center',
  },
  detail: {
    fontSize: rs(18),
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    marginTop: rs(18),
  },
});
