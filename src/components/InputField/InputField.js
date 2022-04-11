import React from 'react';
import './InputField.css';

function InputField({name, type, id, className, value, placeholder, onChange, min}) {
    return (
        <label htmlFor={id}>
            <h4>{name}</h4>
            <input
                type={type}
                id={id}
                className={className}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                min={min}
            />
        </label>
    );
}

export default InputField;