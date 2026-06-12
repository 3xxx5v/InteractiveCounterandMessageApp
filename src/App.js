import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="container">
      <div className="card">
        <h1>{count}</h1>
        
        <p className="goal-text">
          {count >= 5 ? "Goal Reached!" : "Keep going..."}
        </p>

        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)} className="reset">Reset</button>
        </div>

        <div className="input-section">
          <input 
            type="text" 
            placeholder="Type a message..." 
            onChange={(e) => setText(e.target.value)} 
          />
          <p className="display-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default App;