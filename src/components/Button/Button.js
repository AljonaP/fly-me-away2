import React from 'react';
// import 'Button.css';

function Button({ type, name, className, onClick, disabled }) {
    return (
        <button
            type={type}
            name={name}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >{name}
        </button>
    );
}

export default Button;