import React from 'react'

function child({increment}) {
  return (
    <div>
        
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default child
