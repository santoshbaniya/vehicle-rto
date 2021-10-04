import {StyleSheet} from 'react-native';

import {rs} from 'utils/ResponsiveSize';
import Colors from 'utils/color';
import Font from 'utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  header: {
    fontSize: rs(32),
    textAlign: 'center',
    color: Colors.White,
    fontFamily: Font.MontserratBold,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    marginTop: rs(38),
    alignItems: 'center',
    paddingTop: rs(18),
    borderTopLeftRadius: rs(28),
    borderTopRightRadius: rs(28),
    padding: rs(14),
  },
  vehicleName: {
    fontSize: rs(12),
    marginTop: rs(8),
    fontFamily: Font.MontserratMedium,
  },
  sectionContainer: {
    padding: rs(8),
    alignItems: 'center',
  },
  image: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(28),
  },
  imageContainer: {
    padding: rs(8),
    borderRadius: rs(30),
  },
  barIcon: {
    color: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: rs(20),
  },
  listDesign: {
    backgroundColor: '#fff',
    padding: rs(8),
    borderRadius: rs(40),
  },
  titleDesign: {
    fontSize: rs(16),
    color: Colors.Title,
    fontFamily: Font.MontserratBold,
    marginTop: rs(20),
  },
});

export default styles;
