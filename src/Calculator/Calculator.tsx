import React, {ReactNode, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Keypad from './Keypad';
import Output from './Output';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393E46'
    }
})

const Calculator = () => {
    const [input, setValue] = useState<string|null>(null);

    const setInput = (value:string) =>{
        console.log(`clicked ${value}`)
        setValue(input + value)
    }

    return(
        <View style = {styles.container}>
            <Output input = {1} />
            <Keypad setInput = {setInput} />
        </View>
    )
}

export default Calculator;