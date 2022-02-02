import React from "react";
import './PassengerCounter.css';

function PassengerCounter ({type, disabled, passengerQty, setPassengerCounter}) {

    return (
        <article className="passengers-quantity">
            <button
                type={type}
                name='Aftellen'
                onClick={() => setPassengerCounter(passengerQty-1)}
                disabled={disabled}
            >-
            </button>

            <p>{passengerQty}</p>

            <button
                type={type}
                name='Optellen'
                onClick={() => setPassengerCounter(passengerQty+1)}
            >+
            </button>
        </article>
    )
}



export default PassengerCounter;