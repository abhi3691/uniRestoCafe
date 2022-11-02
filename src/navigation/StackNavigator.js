import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {GetloginData} from '../database/relam/schema/login_schema/LoginSchema';
import ToastMessage from '../global_functions/toast_message/ToastMessage';
import HomeScreen from '../screens/home_screen/HomeScreen';
import LoginScreen from '../screens/login_screen/LoginScreen';
import SplashScreen from '../screens/splash_screen/SplashScreen';
import useIsLogedIn from '../zustand/login_State/useIsLogedIn';
import useLoginData from '../zustand/login_State/useLoginState';

const Stack = createStackNavigator();
const StackNavigator = () => {
  //zstand
  const loginData = useLoginData(state => state.loginData);
  const isLogiedIn = useIsLogedIn(state => state.isLogiedIn);
  const setIsLogiedIn = useIsLogedIn(state => state.setIsLogiedIn);
  const setLoginData = useLoginData(state => state.setLoginData);

  //state
  const [loadData, setLoadData] = React.useState(false);

  //rendering
  React.useEffect(() => {
    checkLogiened();
  }, []);

  //rendering
  React.useEffect(() => {
    if (isLogiedIn == true) {
      setLoadData(false);
    } else {
      setLoadData(false);
    }
  }, [isLogiedIn]);

  //function
  const checkLogiened = async () => {
    setLoadData(false);
    const loginDetails = await GetloginData();
    let login = loginDetails[0];
    if (loginDetails.length !== 0) {
      setLoginData(login);
      if (login?.status == true) {
        ToastMessage(`welcome Back ${login.userName}`);
        setIsLogiedIn(true);
      } else {
        setIsLogiedIn(false);
      }
    }
  };

  //ui
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {loadData == true ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      ) : (
        <>
          {isLogiedIn == false ? (
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          ) : (
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          )}
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
