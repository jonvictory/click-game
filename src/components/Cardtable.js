import React from "react";


class Cardtable extends React.Component {
    render() {
      return (
        <div>
       <button className="button" onClick={this.props.dealCards}>
        Deal Cards
        </button>
  </div>
      );
    }
  }


export default Cardtable;
