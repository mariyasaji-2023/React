import React,{useEffect} from 'react'

function Child() {
    useEffect(()=>{
        console.log('Mounting');
        return()=>{
 console.log('Unmounting');
        }
    })
  return (
    <div>
    <h1>this is data</h1>
    </div>
  )
}

export default Child
