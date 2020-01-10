import React from "react";


class Card extends React.Component {
    handleClick = () => {
        this.props.hasBeenTouched(this.props.index)
    }
    render() {
        const {image, desc, status} = this.props.details;
        const unTouched = status === 'untouched';
      return (
        <div className="single-card">
            <h3>{desc}</h3>
           <img className="card-img" src={image} alt={desc} />
           <hr />
           <button 
           disabled={!unTouched} 
           onClick={this.handleClick}>
               {unTouched ? 'Touchey?' : 'TOUCHED!'}
               </button>
  </div>
      );
    }
  }

export default Card;