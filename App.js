import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
//import Homeimage from './Components/Homeimage';
import MainPage from './Components/Screens/MainPage';
import {NavigationContainer} from '@react-navigation/native';

import StackNav from './Components/Nativegations/StackNavigations/StackNav';
const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
    // <View>
    //   <Text>hello</Text>
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({});
