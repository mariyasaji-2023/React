
import React from "react"
import axios from "axios"

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response.data);
        })
      }}>Clic Me</button>
    </div>
  )
}

export default App
