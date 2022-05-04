import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainPage from '../../Screens/MainPage';
import Homeimage from '../../Screens/Homeimage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from '../../Screens/Test';
import App from '../../../App';

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="MainPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Homeimage" component={Homeimage} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="App" component={App} />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
