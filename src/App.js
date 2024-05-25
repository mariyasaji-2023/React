import React, { useState } from 'react'

function App() {
    const [dark, setDark] = useState(false)
    const theme = {
        backgroundColor :dark? '#333' : '#FFF',
        color : dark? '#FFF' : '#333'
    }
    return (
        <div style={theme}>
            <h1>Hello World</h1>
            <button onClick={()=>setDark(!dark)}>Toggle</button>

        </div>
    )
}

export default App

