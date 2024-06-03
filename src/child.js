

import React from 'react'

function child({sendDataToParent}) {
    const sendData =()=>{
        const data = 'hello from child !'
        sendDataToParent(data)
    }
  return (
    <div>
      <button onClick={sendData}>sendDataToParent</button>
    </div>
  )
}

export default child
