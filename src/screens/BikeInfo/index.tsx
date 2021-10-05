import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {rs} from 'utils/ResponsiveSize';
import Font from 'utils/fonts';
import Colors from 'utils/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RNCamera} from 'react-native-camera';

const VehicleDetailScreen = ({route}) => {
  const camera = useRef<RNCamera>();

  const takePicture = async () => {
    if (camera) {
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
      <TextInput
        autoCapitalize="characters"
        style={styles.textInput}
        placeholder="GJ05XX0000"
        placeholderTextColor="#696969"
      />
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <View>
        <Text>hellow, its a camera</Text>
        {/* <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        /> */}
        <TouchableOpacity onPress={takePicture}>
          <FontAwesome name="camera" color="blue" />
        </TouchableOpacity>
      </View>
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
    fontSize: rs(20),
    textAlign: 'center',
    fontFamily: Font.MontserratMedium,
    paddingHorizontal: rs(2),
  },
  textInput: {
    borderWidth: rs(1),
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
    fontFamily: Font.MontserratMedium,
  },
  textDesign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
