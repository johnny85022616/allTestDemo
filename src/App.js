import React, { useState, useEffect } from 'react';

function Example() {
  // 宣告一個新的 state 變數，我們稱作為「count」。
  const [count, setCount] = useState(0);
  const [name , setName] = useState("Johnny")
   
  useEffect(()=>{
      console.log(`This is ${name}`);
  },[name])
  
  useEffect(()=>{
    console.log(`you click ${count} times`);
  },[count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
