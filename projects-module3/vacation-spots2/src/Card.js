import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <h2>Places: {props.vacation.places}</h2>
                <p>Price: {props.vacation.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                 - {props.vacation.description}</p>
            </div>
        );
    }
}

export default Card;