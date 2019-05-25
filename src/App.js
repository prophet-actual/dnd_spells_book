import React from 'react';
import Output from './components/output/output';
import './App.css';

function App() {
  return (

    <div className={"dndapp"}>
      <header className={"dndapp-header"}>
        D&#38;D Spellbook
      </header>
      <div className={"dndapp-body"}>
        <Output />
      </div>
    </div>

  );
}

export default App;
