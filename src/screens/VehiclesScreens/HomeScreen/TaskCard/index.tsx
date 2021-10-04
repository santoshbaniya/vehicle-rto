import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Font from 'utils/fonts';
import {rs} from 'utils/ResponsiveSize';

const TaskCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.sectionContainer}>
      <View style={styles.listDesign}>
        <View style={[styles.imageContainer, {backgroundColor: item.color}]}>
          <Image source={item.image} style={{width: rs(32), height: rs(32)}} />
        </View>
      </View>
      <Text style={styles.vehicleName}>{item.name}</Text>
    </TouchableOpacity>
  );
};
export default TaskCard;
const styles = StyleSheet.create({
  sectionContainer: {
    padding: rs(8),
    alignItems: 'center',
  },
  imageContainer: {
    padding: rs(8),
    borderRadius: rs(30),
  },
  vehicleName: {
    fontSize: rs(12),
    marginTop: rs(8),
    fontFamily: Font.MontserratMedium,
  },
  listDesign: {
    backgroundColor: '#fff',
    padding: rs(8),
    borderRadius: rs(40),
  },
});
