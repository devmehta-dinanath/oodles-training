import { useEffect } from 'react';

const ChildComponent = ({ count }) => {
  // Lifecycle method using useEffect
  useEffect(() => {
    console.log('ChildComponent mounted');

    return () => {
      console.log('ChildComponent unmounted');
    };
  }, []); // Empty dependency array = componentDidMount + componentWillUnmount

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); // Called when `count` changes

  return (
    <div style={styles.container}>
      <h3>Child Component</h3>
      <p>Received Count from Parent: {count}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9'
  }
};

export default ChildComponent;
