import './App.css';

import React, { useState } from 'react';

import Expandable from './components/expandable/Expandable';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="App">
      <div>
        <button onClick={() => setIsExpanded(!isExpanded)}>Toggle Expand</button>

        <Expandable expanded={isExpanded}>
          <p>🙈 Dynamically controlled content here!</p>
        </Expandable>
      </div>
    </div>
  );
}

export default App;
