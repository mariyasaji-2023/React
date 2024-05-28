import React,{useState,useCallback} from 'react'

function App() {
  const [count,setCount] = useState(0)
  const handleclick =useCallback(()=>{
    console.log('button clicked');
  },[])

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
      <button onClick={handleclick}>log</button>
    </div>
  )
}

export default App
