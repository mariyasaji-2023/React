import React ,{useState}from 'react'

function App() {
  const [color,setColor] = useState(0)
  const changecolor = () =>{
    const newColor = color==='white'? 'lightblue' : 'white'
   setColor(newColor)
  }
  return (
    <div style={{backgroundColor:color}}>
      <button onClick={changecolor}>Click</button>
      
    </div>
  )
}

export default App

