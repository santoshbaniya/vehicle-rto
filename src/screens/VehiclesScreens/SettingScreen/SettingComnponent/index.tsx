import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {rs} from 'utils/ResponsiveSize';
import Font from 'utils/fonts';
import Colors from 'utils/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppModal from 'screens/VehiclesScreens/AppModal';

interface IMenuItems {
  image: ImageSourcePropType;
  title: string;
  id: any;
  onPress: any;
  icon: any;
}

interface SettingItems {
  modalVisible: boolean;
  setModalVisible: any;
  SettingOptions: any;
  HistoryOptions: any;
  setHistoryModalVisible: any;
  historyModalVisbile: boolean;
  LanguageOptions: any;
}

interface LanguageItems {
  option: object;
  selected: object;
  onPress: any;
}
interface HistoryItems {
  boolean: object;
  userSelected: object;
  onPressForHistory: any;
}

const SettingComponent = ({
  modalVisible,
  setModalVisible,
  SettingOptions,
  LanguageOptions,
  HistoryOptions,
  setHistoryModalVisible,
  historyModalVisbile,
}: SettingItems) => {
  return (
    <>
      <AppModal
        closeOnTouchOut={false}
        modalFooter={<></>}
        modalBody={
          <View style={{marginTop: rs(20)}}>
            {LanguageOptions.map(
              ({option, selected, onPress}: LanguageItems) => (
                <TouchableOpacity style={styles.modalDesign} onPress={onPress}>
                  <Text style={styles.optionLanguages}>{option}</Text>
                  {selected && (
                    <FontAwesome
                      name="check-circle"
                      size={24}
                      color={Colors.Background}
                    />
                  )}
                </TouchableOpacity>
              ),
            )}
          </View>
        }
        title="Choose Language"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <AppModal
        closeOnTouchOut={false}
        modalFooter={<></>}
        modalBody={
          <View style={{marginTop: rs(20)}}>
            {HistoryOptions.map(
              ({boolean, userSelected, onPressForHistory}: HistoryItems) => (
                <TouchableOpacity
                  style={styles.modalDesign}
                  onPress={onPressForHistory}>
                  <Text style={styles.optionLanguages}>{boolean}</Text>
                  {userSelected && (
                    <FontAwesome
                      name="check-circle"
                      size={24}
                      color={Colors.Background}
                    />
                  )}
                </TouchableOpacity>
              ),
            )}
          </View>
        }
        title="Clear History"
        modalVisible={historyModalVisbile}
        setModalVisible={setHistoryModalVisible}
      />
      <SafeAreaView style={styles.container}>
        {SettingOptions.map(({image, title, icon, onPress, id}: IMenuItems) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View style={styles.flatlistContainer}>
              <View style={styles.imageConatiner}>
                <Image style={styles.flatlistImage} source={image} />
              </View>
              <View style={styles.viewerFlatlist}>
                <Text style={styles.flatlistTitle}>{title}</Text>
                <Text style={{marginLeft: rs(20), color: Colors.White}}>
                  {id}
                </Text>
              </View>

              <FontAwesome name={icon} size={24} style={styles.iconDesign} />
            </View>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </>
  );
};
export default SettingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  flatlistContainer: {
    flexDirection: 'row',
    padding: rs(6),
    marginHorizontal: rs(16),
    marginVertical: rs(6),
    borderRadius: rs(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  flatlistImage: {
    width: rs(20),
    height: rs(20),
    marginHorizontal: rs(10),
  },
  imageConatiner: {
    borderRadius: rs(4),
  },
  iconDesign: {
    marginRight: rs(12),
    color: '#fff',
  },
  flatlistTitle: {
    fontFamily: Font.MontserratBold,
    marginHorizontal: rs(18),
    fontSize: rs(16),
    color: Colors.White,
  },
  optionLanguages: {
    fontSize: rs(16),
    fontFamily: Font.MontserratMedium,
    flex: 1,
  },
  modalDesign: {
    flexDirection: 'row',
    marginVertical: rs(8),
  },
  viewerFlatlist: {
    flex: 1,
  },
});
