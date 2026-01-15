import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log('Form submitted by', title);
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(el)=>{
        submitHandler(el)
      }}>
        <input type='text' placeholder='Enter your name'
        value={title}
        onChange={(el)=>{
          setTitle(el.target.value); 
        }}   
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App