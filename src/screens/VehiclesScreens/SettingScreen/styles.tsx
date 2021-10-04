import {StyleSheet} from 'react-native';

import {rs} from '../../../utils/ResponsiveSize';
import Font from '../../../utils/fonts';
import Colors from '../../../utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  header: {
    fontSize: 22,
    fontFamily: Font.MontserratBold,
    textAlign: 'center',
    color: Colors.White,
    marginVertical: rs(18),
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

export default styles;
