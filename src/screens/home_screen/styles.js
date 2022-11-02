import {StyleSheet} from 'react-native';
import ScreenRatio from '../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../theme/Color';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    backgroundColor: customColor.ligthWihte,
  },
  top: {
    height: ScreenRatio.height / 9,
    backgroundColor: customColor.white,
    elevation: 4,
  },
});

export default styles;
