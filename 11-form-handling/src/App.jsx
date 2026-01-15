import React from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log('Form submitted');
  }
  return (
    <div>
      <form onSubmit={(el)=>{
        submitHandler(el)
      }}>
        <input type='text' placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App