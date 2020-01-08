import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Cardtable from './components/Cardtable'

function App() {
  return (
    <div className="App">
      <Header />
      <Instructions tagline="A game of fate, hate, your own clean slate&mdash;Or expiration date?" />
      <Cardtable />
      </div>
      
  );
}

export default App;
