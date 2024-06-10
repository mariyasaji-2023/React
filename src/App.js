import React, { useRef } from 'react'

function App() {
    const inputRef = useRef(null)
    const handleclick = (event) => {
        event.preventDefault();
        alert('inputvalue : ' + inputRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleclick}>
                <label>
                    input:
                    <input type='text' ref={inputRef} />
                    <button type='submit'>Submit</button>
                </label>
            </form>
        </div>
    )
}

export default App
