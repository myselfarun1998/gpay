import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {Gpay} from 'svg';
import {useNavigation} from '@react-navigation/native';
const Homeimage = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity >
        <Text
          style={{
            width: 200,
            height: 200,
            marginLeft: 120,
            marginTop: 700,
            fontSize: 20,
            opacity: 20,
            position:"absolute",
          }}>
          Powered by Google
        </Text>
      </TouchableOpacity>
          <Gpay width={120} height={120} fill={'red'} style={{marginTop: 280,marginLeft:140}} />
    </View>
  );
};

export default Homeimage;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  svg: {
    width: '100%',
    height: '100%',
  },
});
