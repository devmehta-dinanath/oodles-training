import './App.css'
import ParentComponent from './components/ParentComponent';

const App = () => {
  return (
    <div style={styles.app}>
      <h1>React Component Hierarchy and State Demo</h1>
      <ParentComponent />
    </div>
  );
};

const styles = {
  app: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  }
};

export default App;

