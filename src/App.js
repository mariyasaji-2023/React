import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      increment();
    }, 1000); // Auto increment every second

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>ADD</button>
    </div>
  );
}

export default App;
