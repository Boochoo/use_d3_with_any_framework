import React, { Component } from 'react';
import './styles.css';
import { lineString } from './graph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>My awesome React app</h2>
        <svg>
          <path d={ lineString } />
        </svg>
      </div>
    );
  }
}

export default App;
