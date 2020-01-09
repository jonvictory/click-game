import React from "react";


class Card extends React.Component {
    render() {
        const image = this.props.details.image;
        const name = this.props.details.desc;
      return (
        <div className="single-card">
            <h3>{name}</h3>
           <img className="card-img" src={image} alt={name} />
  </div>
      );
    }
  }

export default Card;