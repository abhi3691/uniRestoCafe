import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  itme: {
    height: ScreenRatio.height / 10,
    width: ScreenRatio.width / 2.5,
  },
  itemContainer: {
    margin: 5,
    alignItems: 'center',
  },
  bar: {
    backgroundColor: customColor.red,
    height: ScreenRatio.width / 100,
    width: ScreenRatio.width / 2.3,
    bottom: -10,
    borderRadius: 30,
  },
});

export default styles;
