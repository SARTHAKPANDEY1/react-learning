import React, { useState } from 'react'
import { X } from 'lucide-react';


const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task];
     
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(task);

    setTitle('')
    setDetails('')

  }

  const deleteNote = (idx) =>{
    const copyTask = [...task]  
    
    copyTask.splice(idx,1)

    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-amber-300'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 items-start flex-col'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        
        {/* first input for heading  */}
        <input type="text"
         className='px-5 font-medium w-full py-2 border-2 rounded outline-none '
         placeholder='Enter Notes'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value);
         }}
         />

        {/* Detailed input */}
        <textarea type="text" 
        className='px-5 font-medium w-full h-32 py-2 flex items-start flex-row border-2 rounded outline-none' 
        placeholder='Write Details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value);     
        }}
        />
        <button 
         className='bg-white active:bg-black font-medium w-full text-black px-5 py-2 rounded'
         >
         Add Note
        </button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start gap-5 mt-5 h-[90%] overflow-auto'>
        {task.map(function(elem,idx){
          return <div key={idx} className='relative
          h-52 w-40 flex justify-between flex-col items-start bg-cover rounded-xl bg-white text-black p-4 bg-[url(data:image/jpeg;base64,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)]'>
          <div>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
          </div>
          <button onClick={()=>{
            deleteNote(idx)
          }} className='w-full py-1 text-xs cursor-pointer active:scale-95 rounded-2xl bg-red-500 text-white font-bold'>Delete</button>
          </div>
        })}
      </div>
    </div>
  </div>
  )
}

export default App