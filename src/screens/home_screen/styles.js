import {StyleSheet} from 'react-native';
import ScreenRatio from '../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../theme/Color';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    backgroundColor: customColor.white,
  },
  top: {
    flexGrow: 1,
    height: ScreenRatio.height,
    backgroundColor: customColor.white,
    elevation: 4,
  },
});

export default styles;
