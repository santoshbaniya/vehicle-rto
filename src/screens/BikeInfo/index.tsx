import React, {useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import axios from 'axios';
import QRCodeScanner from 'react-native-qrcode-scanner';

interface IMenuItems {
  route: any;
}

const VehicleDetailScreen = ({route}: IMenuItems) => {
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
    <View style={styles.conatiner}>
      <View style={styles.textDesign}>
        <Text style={styles.text} adjustsFontSizeToFit>
          Enter Your
        </Text>
        <Text style={styles.text} adjustsFontSizeToFit>
          {route.params.item.name}
        </Text>
        <Text style={styles.text} adjustsFontSizeToFit>
          Details
        </Text>
      </View>
      <TextInput
        autoCapitalize="characters"
        style={styles.textInput}
        placeholder="GJ05XX0000"
        placeholderTextColor="#696969"
      />
      <TouchableOpacity activeOpacity={0.85} style={styles.searchButton}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <QRCodeScanner />
    </View>
  );
};

export default VehicleDetailScreen;
