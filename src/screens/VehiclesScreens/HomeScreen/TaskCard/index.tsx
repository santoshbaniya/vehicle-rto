import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {rs} from 'utils/ResponsiveSize';
import styles from './styles';

interface IMenuItems {
  item: any;
  navigation: any;
}

const TaskCard = ({item, navigation}: IMenuItems) => {
  return (
    <TouchableOpacity
      style={styles.sectionContainer}
      onPress={() =>
        navigation.navigate(item.screen, {
          item,
        })
      }>
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
