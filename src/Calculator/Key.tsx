import React from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

interface KeyProps {
  value: string | number | null;
  type: string;
  operation?: string;
  setInput: (value: any) => void;
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 4 - 10,
    height: (height * 0.65) / 5 - 10,
    borderRadius: 100,
    margin: 5,
    backgroundColor: '#222831',
  },
  text: {
    color: '#EEEEEE',
    fontWeight: '600',
    fontSize: 25,
  },
});

const Key = ({value, type, operation, setInput}: KeyProps) => {
  const log = () => {
    console.log(value);
  };
  return (
    <RectButton style={styles.container} rippleColor={'coral'} onPress={log}>
      <Text style={styles.text}>{value}</Text>
    </RectButton>
  );
};
export default Key;
