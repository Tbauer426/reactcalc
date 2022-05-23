import { useState } from 'react';
import './App.css';
import NumberButton from './Button/NumberButton';
import InputBox from './InputBox/InputBox';

function App() {
  const [lastOp, updateLastOp] = useState("=");
  const [lastVal, updateLastVal] = useState("0");
  const [currentVal, updateVal] = useState("0");

  const operationHandler = (op) => {    
    if(lastVal === "0"){
      updateLastVal(currentVal);
    }
    updateVal("0");
    if(op === "="){
      switch(lastOp){
        case "+":
          updateVal((parseInt(lastVal) + parseInt(currentVal)).toString());
          updateLastVal((parseInt(lastVal) + parseInt(currentVal)).toString());
          break;
        case "-":
          updateVal((parseInt(lastVal) - parseInt(currentVal)).toString());
          updateLastVal((parseInt(lastVal) - parseInt(currentVal)).toString());
          break;
        case "*":
          updateVal((parseInt(lastVal) * parseInt(currentVal)).toString());
          updateLastVal((parseInt(lastVal) * parseInt(currentVal)).toString());
          break;
        case "/":
          updateVal((parseInt(lastVal) / parseInt(currentVal)).toString());
          updateLastVal((parseInt(lastVal) / parseInt(currentVal)).toString());
          break;
        default:
          break;
      }
    }
    updateLastOp(op);
  };

  const buttonPressHandler = (num) => {
    if(currentVal === "0"){
      updateVal(num.toString());
    }
    else{
      updateVal(currentVal + num.toString());
    }
  };

  const clearAll = () => {
    updateVal("0");
    updateLastVal("0");
    updateLastOp("=");
  }

  return (
    <div className="App">
      <header className="App-header">
        <InputBox val={currentVal}/>
        <div>
          <NumberButton onPress={buttonPressHandler} val={9}/>
          <NumberButton onPress={buttonPressHandler} val={8}/>
          <NumberButton onPress={buttonPressHandler} val={7}/>
        </div>
        <div>
          <NumberButton onPress={buttonPressHandler} val={6}/>
          <NumberButton onPress={buttonPressHandler} val={5}/>
          <NumberButton onPress={buttonPressHandler} val={4}/>
        </div>
        <div>
          <NumberButton onPress={buttonPressHandler} val={3}/>
          <NumberButton onPress={buttonPressHandler} val={2}/>
          <NumberButton onPress={buttonPressHandler} val={1}/>
        </div>
        <div>
          <NumberButton onPress={buttonPressHandler} val={0}/>
          <NumberButton onPress={operationHandler} val={"+"}/>
          <NumberButton onPress={operationHandler} val={"-"}/>
        </div>
        <div>
          <NumberButton onPress={operationHandler} val={"*"}/>
          <NumberButton onPress={operationHandler} val={"/"}/>
          <NumberButton onPress={operationHandler} val={"="}/>
        </div>
        <div>
          <NumberButton onPress={clearAll} val={"C"}/>
        </div>
      </header>
    </div>
  );
}

export default App;