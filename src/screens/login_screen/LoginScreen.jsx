import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import customColor from '../../theme/Color';
import ScreenRatio from '../../global_functions/screen_ratio/ScreenRatio';
import FontRatio from '../../global_functions/font_ratio/FontRatio';
import Lottie from 'lottie-react-native';
import {color} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [varifed, setVarified] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation();
  const changeUserName = x => {
    setUserName(x);
  };
  const changePassword = x => {
    setPassword(x);
  };

  const varifyFunction = () => {
    setVarified(true);
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2000);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
      }}>
      {loading == false && (
        <Animatable.View
          animation="zoomIn"
          style={{
            backgroundColor: customColor.white,
            paddingVertical: 30,
            paddingHorizontal: 20,
            borderRadius: 10,
            elevation: 4,
          }}>
          <Text
            style={{
              fontSize: FontRatio(30),
              color: customColor.red,
              margin: 10,
            }}>
            Welcome
          </Text>
          <TextInput
            label="UserName"
            mode="outlined"
            value={userName}
            outlineColor={customColor.red}
            activeOutlineColor={customColor.red}
            onChangeText={text => changeUserName(text)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            secureTextEntry={true}
            outlineColor={customColor.red}
            activeOutlineColor={customColor.red}
            onChangeText={text => changePassword(text)}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            {varifed ? (
              <Lottie
                source={require('../../assets/lottie/varify.json')}
                autoPlay
                style={{
                  height: ScreenRatio.height / 13,
                  backgroundColor: color,
                }}
              />
            ) : (
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => varifyFunction()}
                style={{
                  backgroundColor: customColor.red,
                  height: ScreenRatio.height / 20,
                  width: ScreenRatio.width / 2,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: customColor.white,
                    fontSize: FontRatio(18),
                    fontWeight: 'bold',
                  }}>
                  LogIn
                </Text>
              </TouchableHighlight>
            )}
          </View>
        </Animatable.View>
      )}
    </View>
  );
};

export default LoginScreen;
