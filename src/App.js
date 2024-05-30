import React,{useState} from 'react'
import Child from './child'


function App() {
  const [count,setCount] = useState(0)
  const increment =()=>{
    setCount(count+1)
  }

  return (
    <div>
      <h1>Count:{count}</h1>
      <Child count={count} increment={increment}/>
    </div>
  )
}

export default App
