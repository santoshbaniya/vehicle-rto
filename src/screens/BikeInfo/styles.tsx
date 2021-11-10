import {StyleSheet} from 'react-native';
import {rs} from 'utils/ResponsiveSize';
import Colors from 'utils/color';
import Font from 'utils/fonts';

const styles = StyleSheet.create({
  conatiner: {
    padding: rs(16),
    backgroundColor: '#fff',
    margin: rs(16),
    borderRadius: rs(18),
    justifyContent: 'center',
  },
  text: {
    fontSize: rs(20),
    textAlign: 'center',
    fontFamily: Font.MontserratMedium,
    paddingHorizontal: rs(2),
  },
  textInput: {
    borderWidth: rs(1),
    borderRadius: rs(8),
    fontSize: rs(20),
    padding: rs(10),
    marginVertical: rs(18),
    flex: 1,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
    padding: rs(10),
    borderRadius: rs(24),
  },
  buttonText: {
    fontSize: rs(20),
    color: '#fff',
    fontFamily: Font.MontserratMedium,
  },
  textDesign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
