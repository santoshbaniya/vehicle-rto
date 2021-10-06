import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from 'utils/color';
import {rs} from 'utils/ResponsiveSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Font from 'utils/fonts';
import PropTypes from 'prop-types';

interface SettingItems {
  modalVisible: boolean;
  setModalVisible: any;
  title: string;
  modalBody: any;
  modalFooter: any;
  closeOnTouchOut: any;
}

const AppModal = ({
  modalVisible,
  setModalVisible,
  modalBody,
  title,
  modalFooter,
  closeOnTouchOut,
}: SettingItems) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          if (closeOnTouchOut) {
            setModalVisible(false);
          }
        }}
        style={styles.wrapper}>
        <View style={styles.ModalView}>
          <View style={styles.design}>
            <FontAwesome
              style={{marginHorizontal: rs(12)}}
              name="angle-left"
              size={rs(24)}
              onPress={() => setModalVisible(false)}
            />
            <Text style={styles.title}>{title || 'Vehicle-rto'}</Text>
          </View>
          <View style={styles.divider} />

          <View>{modalBody}</View>
          {modalFooter}

          {!modalFooter && (
            <View>
              <>
                <View>
                  <Text>Hello, Its our Vehicle rto</Text>
                </View>
              </>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

AppModal.propTypes = {
  closeOnTouchOut: PropTypes.bool,
};
AppModal.defaultProps = {
  closeOnTouchOut: true,
};

export default AppModal;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  ModalView: {
    backgroundColor: Colors.White,
    marginHorizontal: rs(20),
    minHeight: rs(300),
    borderRadius: rs(4),
    padding: rs(6),
  },
  title: {
    fontSize: rs(20),
    fontFamily: Font.MontserratMedium,
    marginHorizontal: rs(18),
  },
  divider: {
    borderWidth: 0.5,
    borderColor: Colors.Black,
    marginVertical: rs(2),
  },
  design: {
    flexDirection: 'row',
    padding: rs(12),
  },
});
