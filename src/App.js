
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h2>My Page is {count} Times Clicked</h2>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
