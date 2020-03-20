import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Ima React App</h1>
        <p>This shit works!</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29"/>
        <Person name="Stephanie" age="26"/>
      </div>
    );
  }
}

export default App;
