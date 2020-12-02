import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Keypad from './Keypad';
import Output from './Output';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393E46',
    flexDirection: 'column',
  },
});

interface calcProps {
  children: React.ReactNode;
}

const Calculator = ({children}: calcProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Calculator;
