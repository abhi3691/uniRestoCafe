import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import LoginCard from '../../components/organization/login_card/LoginCard';
import {useIsFocused} from '@react-navigation/native';
const LoginScreen = () => {
  const [loading, setLoading] = React.useState(true);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    } else {
      setLoading(true);
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>{loading == false && <LoginCard />}</View>
  );
};

export default LoginScreen;
