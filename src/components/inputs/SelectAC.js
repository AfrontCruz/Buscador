import React from 'react';

const SelectAC = ({
    value,
    onChange,
    label,
    options,
    id
}) =>{
    return(
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <select id={id} value={value} onChange={onChange} className="form-select">
                <option value="">Seleccionar</option>
                {
                    options.map(
                        (option, i) => <option key={i} value={option.value}>{option.text}</option>
                    )
                }
            </select>
        </div>
    )
};

export default SelectAC;