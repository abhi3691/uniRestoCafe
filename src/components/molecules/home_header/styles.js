import {StyleSheet} from 'react-native';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: ScreenRatio.height / 15.5,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: FontRatio(14),
    color: customColor.gray500,
    marginLeft: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 3,
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 4,
    alignItems: 'center',
  },
  orderText: {
    fontSize: FontRatio(10),
    color: customColor.gray500,
  },
  cart: {
    height: ScreenRatio.height / 10,
    width: ScreenRatio.width / 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: customColor.red,
    height: ScreenRatio.width / 30,
    width: ScreenRatio.width / 30,
    borderRadius: ScreenRatio.width / 30,
    position: 'absolute',
    zIndex: 1,
    left: 28,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeCount: {
    color: customColor.white,
    fontSize: FontRatio(9),
  },
});
export default styles;
