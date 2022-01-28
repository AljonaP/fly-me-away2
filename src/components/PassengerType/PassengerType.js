import React from 'react';
import './PassengerType.css';

function PassengerType({ name, description, className, stateKeyName, stateSetterName, disabled }) {
    return (
        <article>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <button
                type="button"
                disabled={disabled}
                onClick={() =>stateSetterName(stateKeyName-1)}
                className={className}>
                -
            </button>
            <p>{stateKeyName}</p>
            <button
                type="button"
                onClick={() =>stateSetterName(stateKeyName+1)}
                className={className}>
                +
            </button>
        </article>

    );
}

export default PassengerType;
