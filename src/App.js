import React from 'react'
import About from './Container/About'
import Profile from './Container/Profile'
import { useState } from 'react'
import {Route,Routes, useNavigate} from 'react-router-dom'

function App() {
  const [state, setState] = useState('')
  const navigate = useNavigate();
  return (
    <div className='App'>
     <button onClick={()=>navigate('/about')}>About</button>
<button onClick={()=>navigate('/profile')}>Profile</button>
<Routes>
        <Route element={<About/>} path='/about'/>
        <Route element={<Profile/>} path='/profile'/>
</Routes>'
    </div>
  )
}

export default App
