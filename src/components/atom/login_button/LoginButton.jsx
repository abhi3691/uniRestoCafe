import {View, Text, TouchableHighlight} from 'react-native';
import React, {memo} from 'react';
import Lottie from 'lottie-react-native';
import styles from './styles';
const LoginButton = ({varifed, varifyFunction, lottieRef}) => {
  //ui
  return (
    <View style={styles.container}>
      {varifed ? (
        <Lottie
          source={require('../../../assets/lottie/varify.json')}
          autoPlay
          ref={lottieRef}
          loop
          style={styles.lottiContainer}
        />
      ) : (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => varifyFunction()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LogIn</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default LoginButton;
