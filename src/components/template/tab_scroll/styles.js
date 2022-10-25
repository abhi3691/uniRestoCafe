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
    width: ScreenRatio.width,
  },
});

export default styles;
