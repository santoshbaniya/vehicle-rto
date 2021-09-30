import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {rs} from '../../utils/ResponsiveSize';

const UserScreen = () => {
  return (
    <View style={styles.innerConatiner}>
      <Text style={styles.text}>Enter Your Bike's Detail</Text>
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

export default UserScreen;

const styles = StyleSheet.create({
  innerConatiner: {
    padding: rs(16),
    backgroundColor: '#fff',
    margin: rs(16),
    borderRadius: rs(18),
    justifyContent: 'center',
  },
  text: {
    fontSize: rs(24),
    fontWeight: 'bold',
    textAlign: 'center',
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
    backgroundColor: '#00bfff',
    padding: rs(10),
    borderRadius: rs(24),
  },
  buttonText: {
    fontSize: rs(20),
    color: '#fff',
    fontWeight: 'bold',
  },
});
