import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width,
  },
  itme: {
    height: ScreenRatio.height / 10,
    width: ScreenRatio.width / 2.5,
    alignItems: 'center',
  },
  itemContainer: {
    margin: 5,
  },
  bar: {
    backgroundColor: customColor.red,
    height: ScreenRatio.width / 100,
    bottom: -10,
    borderRadius: 30,
  },
  border: {
    height: ScreenRatio.width / 200,
    backgroundColor: customColor.white,
    elevation: 4,
  },
});

export default styles;
