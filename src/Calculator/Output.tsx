import React from 'react';
import {ScrollView, Dimensions, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderColor: 'blue',
    // backgroundColor: 'red',
  },
});

interface outputProps {
  input: string | number | null;
  height: number;
  width: number;
}

const Output = ({input, height, width}: outputProps) => {
  return (
    <View style={[styles.container, {height, width}]}>
      <Text style={{color: 'white', fontSize: 40}}>{input}</Text>
    </View>
  );
};
export default Output;
