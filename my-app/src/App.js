import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
// import Instructions from "./components/Instructions";
import Cardtable from "./components/Cardtable";
import imagemap from "../src/imagemap";
import Card from "./components/Card";

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
        <div className="instruction no-marge no-pad">
          <div className="header-divs">
          <Cardtable dealCards={this.dealCards} />
          {console.log(this)}
          </div>
          <div className="header-divs">
            <h3 className="no-marge title-center">
              Select a card, but don't touch the same card twice.
            </h3>
          </div>
          <div className="header-divs"></div>
        </div>
        <div className="card-table no-marge no-pad">
        {console.log(this)}
          <ul className="cards no-marge no-pad">
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
