import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import customColor from '../../../theme/Color';
import useScrollData from '../../../zustand/scrollData/useScrollData';
import Animated, {
  LightSpeedInLeft,
  LightSpeedInRight,
  useAnimatedStyle,
} from 'react-native-reanimated';
const SingleTab = ({menu_category, activeIndex, index, onPress, data}) => {
  //state
  const [isNext, setIsNext] = React.useState(true);

  //zstand
  const setScrolldata = useScrollData(state => state.setScrolldata);

  React.useEffect(() => {
    setScrolldata(data);
  }, []);

  //change item List Function
  const slideToItem = () => {
    setScrolldata(data);
    onPress();
    if (activeIndex < index) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  };

  //anination style
  const Rbar = useAnimatedStyle(() => {
    return {
      backgroundColor: customColor.red,
    };
  });

  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={styles.itme}
      onPress={() => slideToItem()}>
      <View style={styles.itemContainer}>
        <Text
          style={[
            {
              color:
                activeIndex == index ? customColor.red : customColor.darkGray,
            },
          ]}>
          {menu_category}
        </Text>
        {activeIndex == index && (
          <Animated.View
            style={[styles.bar, Rbar]}
            entering={isNext ? LightSpeedInLeft : LightSpeedInRight}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};

export default SingleTab;
