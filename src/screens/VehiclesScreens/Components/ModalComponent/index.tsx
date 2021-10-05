import React from 'react';
import {View, Button} from 'react-native';
import AppModal from 'screens/VehiclesScreens/AppModal';

const ModalComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal
        modalFooter={<></>}
        modalBody={<View></View>}
        title="Setting"
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <Button
        title="Open Modal"
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};
export default ModalComponent;
