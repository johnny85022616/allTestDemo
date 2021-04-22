import React, { useState } from "react";

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const opts = ["+", "-", "*", "/"];


let typeNew = true;

export default function Calculator() {
  const [startValue, setStartValue] = useState('');
  const [countStack,setCountStack] = useState([]);
  
  console.log("countStack "+countStack) 
  function handleChange(event) {
    if(typeNew==true){
        console.log(parseInt(event.target.value));
        let a = parseInt(event.target.value);
        setStartValue(startValue+a);
    }
    if(typeNew == false){
        let a = parseInt(event.target.value);
        typeNew = true;
        setStartValue(`${a}`);

    }
  }
  
  function handleOptChange(event) {
    let oldArray = countStack;
    oldArray.push(startValue);
    oldArray.push(event.target.value)
    console.log("oldArray "+oldArray)
    if(oldArray.length<3){
        setStartValue('');
        setCountStack(oldArray);
        
    }else{
        let a = oldArray[0];
        let b = oldArray[1];
        let c = oldArray[2];
        console.log(a+"##"+b+"##"+c)
        let final = eval(a+b+c);
        
        let newArray = [];
        newArray.push(final);
        newArray.push(oldArray.pop());

        setStartValue(`${final}`);
        setCountStack(newArray);

        typeNew = false;
    }

    
  }
  
  return (
    <div className="App">
      <h3>Input: {startValue} </h3>
      <h3>Result: </h3>
      <div className="keyBoardContainer">
        {nums.map((ele) => {
          return (
            <button key={ele} value={ele} onClick={handleChange}>
              {ele}
            </button>
          );
        })}
        {opts.map((ele) => {
          return <button key={ele} value={ele} onClick={handleOptChange}>{ele}</button>;
        })}
      </div>
    </div>
  );
}
