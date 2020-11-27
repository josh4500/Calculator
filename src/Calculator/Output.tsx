import React from 'react';
import {ScrollView, Dimensions, StyleSheet, Text, View } from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        width,
        top: 0,
        height: height * 0.35,
        borderColor: 'red',
    }
})

interface outputProps{
    input: string|number|null
}

const Output = ({input}:outputProps)=> {
    return(
        <View style = {styles.container}>
            <ScrollView>
                <Text style={{color: 'white', fontSize: 100}}>{input}</Text>
            </ScrollView>
        </View>
    )
}
export default Output;