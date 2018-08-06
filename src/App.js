import React, { Component } from 'react';
import TextInput from './components/textInput'
import TotalSum from './components/totalSum'
import WordSums from './components/wordSums'
import LetterSums from './components/letterSums'
import Footer from './components/footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  toggle() {
    const check = document.getElementById('checkbox')
    const hSpaced = document.getElementById('h-spaced')
    const hCompressed = document.getElementById('h-compressed')
    const eSpaced = document.getElementById('e-spaced')
    const eCompressed = document.getElementById('e-compressed')
    if (check.checked === true) {
      hCompressed.style.display = 'none'
      eCompressed.style.display = 'none'
      hSpaced.style.display = 'block'
      eSpaced.style.display = 'block'
    } else {
      hCompressed.style.display = 'block'
      eCompressed.style.display = 'block'
      hSpaced.style.display = 'none'
      eSpaced.style.display = 'none'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Abjadify</h1>
        </header>
        <main className='main'>
          <TextInput />
          <TotalSum />
          <WordSums />
          <LetterSums toggle={() => this.toggle()}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
