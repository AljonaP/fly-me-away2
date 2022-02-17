import React from 'react';
import './InputFieldLabelName.css';

function InputFieldLabelName({ type, id, name, className, value, placeholder, name2, onChange, checked, min }) {
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
                checked={checked}
                onChange={onChange}
                min={min}
            />
            {name2}
        </label>

    );
}

export default InputFieldLabelName;