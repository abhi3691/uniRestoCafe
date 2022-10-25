import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
const IconButton = ({onPress, name, size, color}) => {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={() => onPress()}>
      <Ionicons name={name} size={FontRatio(size)} color={color} />
    </TouchableHighlight>
  );
};

export default IconButton;
