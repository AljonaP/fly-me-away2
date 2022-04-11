import React from 'react';

function Button({ type, name, className, onClick, disabled, value, title, id }) {
    return (
        <button
            type={type}
            name={name}
            value={value}
            className={className}
            onClick={onClick}
            disabled={disabled}
            title={title}
            id={id}
        >{name}
        </button>
    );
}

export default Button;