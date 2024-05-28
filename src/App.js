import React ,{useMemo,useState}from 'react'

function App() {
  const [count,setCount] = useState(0)
  const computedValue =useMemo(()=>{
    console.log("computing");
    return count*2
  },[count])
  return (
    <div>
      <h1>count:{count}</h1>
      <h2>computedValue:{computedValue}</h2>
      <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default App
