import React from "react";


class Card extends React.Component {
    // constructor (props){
    //     super()
    //     this.state = {
    //         status: props.status || false
    //     }
    // }
    
    handleClick = () => {
        this.props.hasBeenTouched(this.props.index)
    }
  touchClick = () => {
    this.props.touchyTouchy(this.props.index)
  }
    render() {
        const {image, desc, status} = this.props.details;
        const unTouched = status === false;
      return (
        <div className="single-card" onClick={this.touchClick}>
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