import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Homeimage from './Homeimage';

const MainPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Test');
    }, 5000);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Homeimage />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({});
