import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home_screen/HomeScreen';
import LoginScreen from '../screens/login_screen/LoginScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
