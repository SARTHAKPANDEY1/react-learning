import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
 
  const getData =  async() => {
   const response = await axios.get('https://picsum.photos/v2/list')   
   setData(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
         {data.map(function(el,idx){
          return <h3>Hello,{el.author}{idx}</h3>
         })}
      </div>
    </div>
  )
}

export default App