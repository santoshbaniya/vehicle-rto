import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {rs} from '../../utils/ResponsiveSize';
import Font from '../../utils/fonts';
import Colors from '../../utils/color';

const VehicleDetailScreen = ({route}) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>{route.params.item.name}</Text>
      <TextInput
        autoCapitalize="characters"
        style={styles.textInput}
        placeholder="GJ05XX0000"
        placeholderTextColor="#696969"
      />
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VehicleDetailScreen;

const styles = StyleSheet.create({
  conatiner: {
    padding: rs(16),
    backgroundColor: '#fff',
    margin: rs(16),
    borderRadius: rs(18),
    justifyContent: 'center',
  },
  text: {
    fontSize: rs(22),
    textAlign: 'center',
    fontFamily: Font.MontserratBold,
  },
  textInput: {
    borderWidth: rs(1),
    borderColor: '#8a2be2',
    borderRadius: rs(8),
    fontSize: rs(20),
    padding: rs(10),
    marginVertical: rs(18),
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
    padding: rs(10),
    borderRadius: rs(24),
  },
  buttonText: {
    fontSize: rs(20),
    color: '#fff',
    fontWeight: 'bold',
  },
});
