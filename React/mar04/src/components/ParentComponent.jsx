import { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Update state using setState
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={styles.container}>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount} style={styles.button}>Increment</button>
      
      {/* Pass props to the child component */}
      <ChildComponent count={count} />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'center'
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default ParentComponent;
