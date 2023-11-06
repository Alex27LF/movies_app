import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors, FontFamily} from '../utils/constans.util';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MovieFlix</Text>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    borderColor: Colors.orange,
    flexDirection: 'row',
    marginVertical: 5,
  },
  text: {
    width: '85%',
    fontFamily: FontFamily.sofia_ExtraBold,
    fontSize: 30,
    color: Colors.orange,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
    color: Colors.orange,
  },
});
