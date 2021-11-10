import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';

const CameraScreen = () => {
  const [{cameraRef}] = useCamera();
  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.front}
        style={styles.camera}
      />
    </View>
  );
};
export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
