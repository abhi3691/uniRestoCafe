import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import customColor from './src/theme/Color';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={customColor.white} barStyle="dark-content" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
