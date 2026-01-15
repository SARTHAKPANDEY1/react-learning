import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)   
  }

  function decreaseNum(){
    setNum(num-1)   
  }

  function jumpNum(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button className="pulse-btn" onClick={increaseNum}>Increase</button>
      <button className="pulse-btn" onClick={decreaseNum}>Decrease</button>
      <button className="pulse-btn" onClick={jumpNum}>Increase 5</button>
    </div>
  )
}

export default App