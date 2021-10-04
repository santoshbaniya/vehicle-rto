import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
  ImageSourcePropType,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {rs} from 'utils/ResponsiveSize';
import Colors from 'utils/color';
import Font from 'utils/fonts';

interface LanguageProps extends TouchableOpacityProps {
  title: string;
  image: ImageSourcePropType;
  isActive: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlistContainer: {
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
    width: rs(28),
    height: rs(28),
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
    flex: 1,
    fontFamily: Font.MontserratBold,
    marginHorizontal: rs(18),
    fontSize: rs(16),
    color: Colors.White,
  },
  flatlistViewer: {
    marginTop: rs(12),
  },
});

const TaskCard = ({image, title, isActive}: LanguageProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.flatlistContainer}>
        <View style={[styles.imageConatiner]}>
          <Image style={styles.flatlistImage} source={image} />
        </View>
        <Text style={styles.flatlistTitle}>{title}</Text>
        <FontAwesome
          name={isActive ? 'check-circle' : 'check-circle'}
          size={rs(24)}
          color={isActive ? 'red' : '#fff'}
        />
      </View>
    </TouchableOpacity>
  );
};
export default TaskCard;
