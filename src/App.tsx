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
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </span>
      </div>
    </div>
  );
}

export default App;
