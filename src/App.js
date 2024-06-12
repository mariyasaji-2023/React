import React ,{useState}from 'react'
import Child from './Child'

function App() {
  const [state,setState] = useState(false)
  return (
    <div>
      <button onClick={()=>setState(!state)}>show/hide</button>
      {state?<Child/>:null}
    </div>
  )
}

export default App
