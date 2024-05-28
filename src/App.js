import React, { useReducer } from 'react'
const initialstate = { count: 0 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      throw new Error()
  }
}
function App() {
  const [state, dispatch] = useReducer( reducer,initialstate)
  return (
    <div>
      <p>counter:{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  )
}

export default App
