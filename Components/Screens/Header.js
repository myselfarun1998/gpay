import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Menus} from 'svg';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Menus width={50} height={50} fill="#112B3C" style={{marginLeft:-330,marginBottom:40}} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
