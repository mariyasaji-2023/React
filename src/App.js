import React, { useState } from 'react';

function ControlledComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Input Value: ' + inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledComponent;