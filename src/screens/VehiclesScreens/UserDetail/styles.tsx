import {StyleSheet} from 'react-native';
import Colors from '../../../utils/color';
import Font from '../../../utils/fonts';
import {rs} from '../../../utils/ResponsiveSize';

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
    marginHorizontal: rs(8),
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
  flatlistTitle: {
    flex: 1,
    fontFamily: Font.MontserratBold,
    marginHorizontal: rs(18),
    fontSize: rs(16),
    color: Colors.White,
  },
});

export default styles;
