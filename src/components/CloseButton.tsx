import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {Colors, FontFamily} from '../utils/constans.util';
import Ionicons from 'react-native-vector-icons/Ionicons';

type buttonProps = {
  name: string;
  header: string;
  action: () => void;
};

const CloseButton = (props: buttonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBG} onPress={() => props.action()}>
        <Ionicons name={props.name} style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.header}</Text>
      <View style={styles.emptyContainer} />
    </View>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: Colors.white,
    fontSize: 24,
  },
  headerText: {
    flex: 1,
    fontFamily: FontFamily.sofia_Medium,
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white,
  },
  emptyContainer: {
    height: 40,
    width: 40,
  },
  iconBG: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Colors.orange,
  },
});
