import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const CallScreen = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .post(
        'https://api.apiclub.in/api/v1/vehicle_info?vehicleId=UP53CL7194',
        {
          vehicleId: 'UP53CL7194',
        },
        {
          headers: {
            Referer: 'codse.com',
            'API-KEY': 'ed2b59533d88d123dea88df68b6285d8',
          },
        },
      )
      .then(response => console.log(response.data));
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic FlatList Example</Text>
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700',
  },
});
