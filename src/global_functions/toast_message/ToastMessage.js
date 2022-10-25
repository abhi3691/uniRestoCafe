import {View, Text} from 'react-native';
import React from 'react';
import Toast from 'react-native-simple-toast';
const ToastMessage = message => {
  Toast.show(message, Toast.SHORT, Toast.BOTTOM);
};

export default ToastMessage;
