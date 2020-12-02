import * as React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import Key from './Key';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#222831',
    position: 'absolute',
    height: height * 0.65,
    width,
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  key: {
    borderColor: 'red',
  },
});
interface keyPadProps {
  children: React.ReactNode;
  height: number;
  width: number;
}
const Keypad = ({height, width, children}: keyPadProps) => {
  return <View style={[styles.container, {height, width}]}>{children}</View>;
};
export default Keypad;
