import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import IconButton from '../../atom/icon_button/IconButton';
import customColor from '../../../theme/Color';
import {useNavigation} from '@react-navigation/native';
const HomeHeader = ({label, count}) => {
  const goBack = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <IconButton
          color={customColor.black}
          name="ios-arrow-back-outline"
          size={25}
          onPress={() => goBack()}
        />
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.orderText}>My Orders</Text>
        <View style={styles.cart}>
          <View style={styles.badge}>
            <Text style={styles.badgeCount}>{'0'}</Text>
          </View>
          <IconButton
            color={customColor.black}
            name="md-cart"
            size={25}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
