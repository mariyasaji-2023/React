import React from 'react'

function child({sendDataToParent}) {
  const senddata =()=>{
    const data = "hello from child"
    sendDataToParent(data)
  }
  return (
    <div>
      <button onClick={senddata}>sendDataToParent</button>
    </div>
  )
}

export default child
