import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Cardtable from "./components/Cardtable";
import imagemap from "../src/imagemap";
import Card from './components/Card';

class App extends React.Component {
  state = {
    cards: {}
  };
  dealCards = () => {
    this.setState({ cards: imagemap });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Instructions tagline="A game of fate, hate, your own clean slate&mdash;Or expiration date?" />
        <div className="card-table">
          <Cardtable dealCards={this.dealCards} />
          <ul className="cards">
            {Object.keys(this.state.cards).map(key => (
              <Card key={key} details={this.state.cards[key]} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
