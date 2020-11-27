import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import Key from './Key'
const {height, width}  = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222831',
        position: 'absolute',
        height: height * 0.65,
        width,
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    key: {
        borderColor: 'red',
    }
})

interface ctrl{
    value: string|number,
    type: string,
    operation?: string
}
const controls: Array<ctrl> = [
    {value:'C', type:'string', operation: 'clear-all'},
    {value:'X', type:'string', operation: 'multiply'},
    {value:'/', type:'string', operation: 'divide'},
    {value:'x', type:'string', operation: 'clear'},
    {value:'7', type:'numeric'},
    {value:'8', type:'numeric'},
    {value:'9', type:'numeric'},
    {value:'-', type:'string', operation: 'subtract'},
    {value:'4', type:'numeric'},
    {value:'5', type:'numeric'},
    {value:'6', type:'numeric'},
    {value:'+', type:'string', operation: 'add'},
    {value:'1', type:'numeric'},
    {value:'2', type:'numeric'},
    {value:'3', type:'numeric'},
    {value:'=', type:'string', operation: 'equal'},
    {value:'.', type:'string', operation: 'clear'},
    {value:'0', type:'numeric'},
    {value:'%', type:'string', operation: 'percentage'},
]
const Keypad = ({setInput}:any)=>{
    return(
        <View style={styles.container}>
            {controls.map(({value, type, operation}, index)=>(
                <Key value = {value} type= {type} key = {index} setInput = {setInput}/>
            ))}
        </View>
    )
}
export default Keypad;