import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child component rendered');
  return <button onClick={onClick}>Log</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('button clicked');
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default App;
