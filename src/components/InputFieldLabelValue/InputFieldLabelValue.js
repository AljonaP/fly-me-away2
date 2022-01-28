import React from 'react';
import './InputFieldLabelValue.css';

function InputFieldLabelValue({type, id, name, className, value, placeholder, onChange, checked, min}) {
    return (
        <label htmlFor={id}>
            {value}
            <input
                type={type}
                id={id}
                className={className}
                name={name}
                value={value}
                placeholder={placeholder}
                checked={checked}
                onChange={onChange}
                min={min}
            />
        </label>
    );
}

export default InputFieldLabelValue;