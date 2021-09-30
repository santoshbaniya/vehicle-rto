import {StyleSheet} from 'react-native';

import {rs} from '../../../../utils/ResponsiveSize';
import Font from '../../../../utils/fonts';
import Colors from '../../../../utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Aliceblue,
  },
  header: {
    fontSize: 22,
    fontFamily: Font.MontserratBold,
    textAlign: 'center',
    marginVertical: rs(18),
  },
  flatlistContainer: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    padding: rs(8),
    margin: rs(10),
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
    width: rs(40),
    height: rs(40),
    marginHorizontal: rs(10),
  },
  imageConatiner: {
    backgroundColor: Colors.White,
    borderRadius: rs(4),
  },
  iconDesign: {
    marginRight: rs(12),
  },
  flatlistTitle: {
    flex: 1,
    fontFamily: Font.MontserratMedium,
    marginHorizontal: rs(18),
    fontSize: rs(16),
  },
});

export default styles;
