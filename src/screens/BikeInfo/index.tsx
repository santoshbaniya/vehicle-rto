import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import qs from 'qs';
import axios from 'axios';
import styles from './styles';
import Colors from 'utils/color';
import {ActivityIndicator} from 'react-native';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

interface IMenuItems {
  route: any;
  navigation: any;
}

const VehicleDetailScreen = ({route, navigation}: IMenuItems) => {
  const [query, setQuery] = useState('');
  const [isBusy, setBusy] = useState(false);
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    Keyboard.dismiss();
    try {
      setData(null);
      setBusy(true);
      const response = await axios.post(
        'https://api.apiclub.in/api/v1/vehicle_info',
        qs.stringify({vehicleId: query}),
        {
          headers: {
            Referer: 'com.codse.app',
            'API-KEY': 'ed2b59533d88d123dea88df68b6285d8',
          },
        },
      );
      setData(response.data.response);
      setBusy(false);
      navigation.push('User Input', {data: response.data.response});
    } catch (error) {
      setBusy(false);
    }
  };

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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          autoCapitalize="characters"
          style={styles.textInput}
          placeholder="GJ05XX0000"
          placeholderTextColor="#696969"
          onChangeText={value => setQuery(value)}
        />

        <FontAwesome
          style={{marginLeft: -24}}
          name="camera"
          color={Colors.Background}
          size={18}
          onPress={() => navigation.navigate('Camera')}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.searchButton}
        disabled={isBusy}
        onPress={handleSearch}>
        {isBusy ? (
          <ActivityIndicator size="small" color={Colors.White} />
        ) : (
          <Text style={styles.buttonText}>Search</Text>
        )}
      </TouchableOpacity>
      {data && <Text>{JSON.stringify(data)}</Text>}
    </View>
  );
};

export default VehicleDetailScreen;
