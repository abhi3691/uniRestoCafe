import {StyleSheet} from 'react-native';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: customColor.white,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: FontRatio(30),
    color: customColor.red,
    margin: 10,
  },
});

export default styles;
