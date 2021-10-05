import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ModalComponent from '../Components/ModalComponent';

const Contact = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Text>hellow</Text>
    </View>
  );
};

export default Contact;
