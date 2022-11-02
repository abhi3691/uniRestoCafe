import {View, Text, useColorScheme} from 'react-native';
import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import LoginButton from '../../atom/login_button/LoginButton';
import styles from './styles';
import {HelperText, TextInput} from 'react-native-paper';
import customColor from '../../../theme/Color';
import CreateLogin from '../../../database/relam/schema/login_schema/LoginSchema';
import useIsLogedIn from '../../../zustand/login_State/useIsLogedIn';

const LoginCard = () => {
  //state
  const [password, setPassword] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [varifed, setVarified] = React.useState();

  //ref
  const lottieRef = React.useRef();

  //hooks
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  //zstand
  const setIsLogiedIn = useIsLogedIn(state => state.setIsLogiedIn);

  //function
  const changeUserName = x => {
    setUserName(x);
  };
  const changePassword = x => {
    setPassword(x);
  };
  const varifyFunction = React.useCallback(() => {
    if (userName.length !== 0 && password.length !== 0) {
      const d = new Date();

      CreateLogin({
        id: d.getTime(),
        userName: userName,
        password: password,
        status: true,
      });

      setVarified(true);

      setTimeout(() => {
        lottieRef.current?.play();
      }, 100);

      setTimeout(() => {
        setIsLogiedIn(true);
      }, 500);
    } else {
      setVarified(false);
    }
  });

  const hasErrors1 = () => {
    if (varifed == false && userName.length == 0) {
      return true;
    } else {
      return false;
    }
  };
  const hasErrors2 = () => {
    if (varifed == false && password.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  //Ui

  return (
    <Animatable.View
      animation="zoomIn"
      style={[
        styles.container,
        {
          backgroundColor:
            colorScheme == 'dark' ? customColor.black : customColor.white,
        },
      ]}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput
        label="UserName"
        mode="outlined"
        value={userName}
        outlineColor={customColor.red}
        style={colorScheme == 'dark' ? styles.inputWhite : styles.inputDark}
        activeOutlineColor={customColor.red}
        onChangeText={text => changeUserName(text)}
      />
      {varifed == false && (
        <HelperText type="error" visible={hasErrors1()}>
          UserName is empty!
        </HelperText>
      )}
      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        secureTextEntry={true}
        outlineColor={customColor.red}
        style={colorScheme == 'dark' ? styles.inputWhite : styles.inputDark}
        activeOutlineColor={customColor.red}
        onChangeText={text => changePassword(text)}
      />
      {varifed == false && (
        <HelperText type="error" visible={hasErrors2()}>
          Password is empty!
        </HelperText>
      )}
      <LoginButton
        varifed={varifed}
        varifyFunction={varifyFunction}
        lottieRef={lottieRef}
      />
    </Animatable.View>
  );
};

export default memo(LoginCard);
