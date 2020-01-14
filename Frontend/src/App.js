import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm Currently <code>Maintainances</code>, Glad for your patient ;).
        </p>
        <a
          className="App-link"
          href="mailto:me@aboutindra.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch!
        </a>
      </header>
    </div>
  );
}

export default App;
