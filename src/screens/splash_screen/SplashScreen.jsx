import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import FontRatio from '../../global_functions/font_ratio/FontRatio';
import customColor from '../../theme/Color';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        size={FontRatio(50)}
        color={customColor.red}
      />
    </View>
  );
};

export default SplashScreen;
