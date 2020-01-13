import React from "react"; 

class Touched extends React.Component {
    render() {
        const touchedIds = Object.keys(this.props.touched)
        const total = touchedIds.reduce((prevTotal, key) => {
            const card = this.props.cards[key];
            const count = this.props.touched[key];
            const hasBeenTouched = card && card.status === false;
            if(hasBeenTouched) {
                return prevTotal + (count)
            }
            return prevTotal;
        },0);
        return (
            <div className="touch-wrap">
                <h2>Touched</h2>
                {/* <ul>
                {touchedIds.map(key => <li>{key}</li>)}
                </ul> */}
                <div>
                    <h3>Total</h3>
                <p>{total}</p>
                </div>
                
            </div>
        )
    }
}
export default Touched