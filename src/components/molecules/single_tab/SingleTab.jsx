import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import customColor from '../../../theme/Color';
import useScrollData from '../../../zustand/scrollData/useScrollData';
const SingleTab = ({menu_category, activeIndex, index, onPress, data}) => {
  //ref
  const slideRef = React.useRef();

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
      setTimeout(() => {
        slideRef?.current?.slideInLeft();
      }, 100);
    }
    if (activeIndex > index) {
      setTimeout(() => {
        slideRef?.current?.slideInRight();
      }, 100);
    }
  };

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
          <Animatable.View
            ref={slideRef}
            style={styles.bar}
            duration={500}
            easing="ease-in"
            useNativeDriver={true}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};

export default SingleTab;
