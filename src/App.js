// import React, { useRef } from 'react';
// function App() {
//   const divRef = useRef(null);
//   const changeColor = () => {
//     const currentColor = divRef.current.style.backgroundColor;
//     const newColor = currentColor === 'white' ? 'lightblue' : 'white';
//     divRef.current.style.backgroundColor = newColor;
//   };
//   return (
//     <div>
//       <div ref={divRef}>
//         Color Box
//       </div>
//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   );
// }

// export default App

import React,{useRef} from 'react'

function App() {
  const divRef = useRef(null)
  const changeColor =()=>{
    const currentColor = divRef.current.style.backgroundColor;
    const newColor = currentColor === 'white'? 'lightblue':'white' ;
    divRef.current.style.backgroundColor = newColor
  }
  return (
    <div ref={divRef}>
      <button onClick={changeColor}>Click</button>
    </div>
  )
}

export default App


