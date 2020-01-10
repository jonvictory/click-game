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
  // shuffleCards = (array) => {
  //   const cardArray = Object.keys(this.state.cards)
  //   cardArray.sort(function(a,b){return 0.5 - Math.random()});
    
  // I can't figure out how to make this function work. But theoretically it should be possible to turn the cardArray.sort function into a function.}
  
  render() {
    const cardArray = Object.keys(this.state.cards)
    
    return (
      
      <div className="App">
        <Header />
        <div className="instruction no-marge no-pad">
          <div className="header-divs">
          <Cardtable dealCards={this.dealCards} />
          {/* {console.log(this)} */}
          </div>
          <div className="header-divs">
            <h3 className="no-marge title-center">
              Select a card, but don't touch the same card twice.
            </h3>
          </div>
          <div className="header-divs"></div>
        </div>
        <div className="card-table no-marge no-pad">
        {/* {console.log(this)} */}
          <ul className="cards no-marge no-pad">
            {cardArray.sort(function(a,b){return 0.5 - Math.random()}).map(key => (
              <Card key={key} details={this.state.cards[key]} />
              
            ))}
            {console.log(<Card/> + "card")}
            {console.log(this.state.cards + "this.state.cards")}
            
          </ul>
        </div>
        
      </div>
    );
  }
}

export default App;
