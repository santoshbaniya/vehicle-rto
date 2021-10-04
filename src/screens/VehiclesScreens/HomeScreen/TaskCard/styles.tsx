import {StyleSheet} from 'react-native';
import {rs} from 'utils/ResponsiveSize';
import Font from 'utils/fonts';
import Colors from 'utils/color';

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
    backgroundColor: Colors.White,
    padding: rs(8),
    borderRadius: rs(40),
  },
});
export default styles;
