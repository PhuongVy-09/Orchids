import React, { useState } from 'react'

export default function CountDemoFunc() {
    const [count, setCount] = useState(0)
  
    return (
      <div>CountDemoFunc
        
        <p>Count: {count}</p>
        <button onClick={()=> setCount(count + 1)}>Click me</button>
      </div>
    )
  }