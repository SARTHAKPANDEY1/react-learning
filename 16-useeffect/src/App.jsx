import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChange(){
    console.log('a changed');
    
  }
  function bChange(){
    console.log('b changed');
    
  }

  useEffect(function(){
    bChange()
    console.log('running...');
    
  },[a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App