import * as React from 'react';
import {Dimensions} from 'react-native';
import Calculator, {Output, Keypad, Key} from './src/Calculator';

const {width, height} = Dimensions.get('window');

const App = () => {
  const [input, setInput] = React.useState<string | number | null>(1234554321);

  interface ctrl {
    value: string | number;
    type: string;
    operation?: string;
  }
  const controls: Array<ctrl> = [
    {value: 'C', type: 'string', operation: 'clear-all'},
    {value: 'X', type: 'string', operation: 'multiply'},
    {value: '/', type: 'string', operation: 'divide'},
    {value: 'x', type: 'string', operation: 'clear'},
    {value: '7', type: 'numeric'},
    {value: '8', type: 'numeric'},
    {value: '9', type: 'numeric'},
    {value: '-', type: 'string', operation: 'subtract'},
    {value: '4', type: 'numeric'},
    {value: '5', type: 'numeric'},
    {value: '6', type: 'numeric'},
    {value: '+', type: 'string', operation: 'add'},
    {value: '1', type: 'numeric'},
    {value: '2', type: 'numeric'},
    {value: '3', type: 'numeric'},
    {value: '=', type: 'string', operation: 'equal'},
    {value: '.', type: 'string', operation: 'clear'},
    {value: '0', type: 'numeric'},
    {value: '%', type: 'string', operation: 'percentage'},
  ];

  return (
    <>
      <Calculator>
        <Output width={width} height={height * 0.35} input={input} />
        <Keypad width={width} height={height * 0.65}>
          {controls.map(({value, type, operation}, index) => (
            <Key value={value} type={type} key={index} setInput={setInput} />
          ))}
        </Keypad>
      </Calculator>
    </>
  );
};

export default App;
