import React from 'react'

const App = () => {
  function btn() {
    console.log('hello');
  }
  return (
    <div>
      <button onClick={btn}>Click</button>
    </div>
  )
}

export default App