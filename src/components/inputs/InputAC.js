import React from 'react';

const InputAC = ({
    value,
    onChange,
    id,
    label,
    type,
    className
}) =>{
    return(
        <div className={"form-group " + className}>
            <label htmlFor={id}>{label}</label>
            <input id={id} className="form-control" type={type} value={value} onChange={onChange} />
        </div>
    )
};

export default InputAC;