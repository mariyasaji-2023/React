


import React ,{useState}from 'react'
import Child from './Child'

function App() {
  const [dataFromChild,setDataFromChild] = useState('')
  const receiveDataFromChild = (data) =>{
    setDataFromChild(data)
  }
  return (
    <div>
      <p>data from child:{dataFromChild}</p>
      <Child sendDataToParent={receiveDataFromChild}/>
    </div>
  )
}

export default App
