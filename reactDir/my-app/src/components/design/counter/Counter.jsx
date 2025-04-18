import React, { useState } from "react";
import { Button } from "../../common/Button";

export function Counter() {
  const [count, setCount] = useState('0')
  const handleUp = ()=>{
    setCount(s=>s+1)
  }
  const handleDown = ()=>{
    setCount(s=>s-1)
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>DISPLAY: {count}</p>
      <Button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 mr-2' onClick={handleUp}>UP</Button>
      <Button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800' onClick={handleDown}>Down</Button>
    </div>
  );
}
