import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {rs} from 'utils/ResponsiveSize';
import Colors from 'utils/color';
import Font from 'utils/fonts';
import Feather from 'react-native-vector-icons/FontAwesome';

const TaskCard = ({picture, title, icon}) => (
  <TouchableOpacity style={styles.flatlistContainer}>
    <View style={[styles.imageConatiner]}>
      <Image style={styles.flatlistImage} source={picture} />
    </View>
    <Text style={styles.flatlistTitle}>{title}</Text>
    <Feather name={icon} size={24} style={styles.iconDesign} />
  </TouchableOpacity>
);
export default TaskCard;

const styles = StyleSheet.create({
  flatlistContainer: {
    // backgroundColor: Colors.White,
    flexDirection: 'row',
    padding: rs(6),
    marginHorizontal: rs(16),
    marginVertical: rs(6),
    borderRadius: rs(4),
    alignItems: 'center',
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
    // backgroundColor: Colors.White,
    borderRadius: rs(4),
  },
  iconDesign: {
    marginRight: rs(12),
    color: '#fff',
  },
  flatlistTitle: {
    flex: 1,
    fontFamily: Font.MontserratBold,
    marginHorizontal: rs(18),
    fontSize: rs(16),
    color: Colors.White,
  },
});
