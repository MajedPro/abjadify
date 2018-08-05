import React, { Component } from 'react';
import TextInput from './components/textInput'
import TotalSum from './components/totalSum'
import WordSums from './components/wordSums'
import LetterSums from './components/letterSums'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <TextInput />
          <TotalSum />
          <WordSums />
          <LetterSums />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </main>
      </div>
    );
  }
}

export default App;
