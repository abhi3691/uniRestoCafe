import {StyleSheet} from 'react-native';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  lottiContainer: {
    height: ScreenRatio.height / 13,
  },
  buttonContainer: {
    backgroundColor: customColor.red,
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: customColor.white,
    fontSize: FontRatio(18),
    fontWeight: 'bold',
  },
});

export default styles;
