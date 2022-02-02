import React from 'react';
// import 'Button.css';

function Button({ type, name, className, onClick, disabled, value }) {
    return (
        <button
            type={type}
            name={name}
            value={value}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >{name}
        </button>
    );
}

export default Button;