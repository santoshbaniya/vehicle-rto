import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Colors from 'utils/color';
import {rs} from 'utils/ResponsiveSize';
import Font from 'utils/fonts';

const NotificationScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.title}>Show notifications</Text>
        <Switch
          trackColor={{false: Colors.SwitchPrimary, true: Colors.SwitchTrue}}
          thumbColor={isEnabled ? Colors.SwitchEnabled : Colors.SwitchDisabled}
          ios_backgroundColor={Colors.Background}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background,
    padding: rs(18),
  },
  headerView: {
    backgroundColor: '#fff',
    borderRadius: rs(24),
    padding: rs(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: rs(8),
    flex: 1,
    fontSize: rs(18),
    fontFamily: Font.MontserratMedium,
  },
});
