import React from 'react';

const ButtonAC = ({
    className,
    type,
    onClick,
    text
}) =>{
    return(
        <div className={className}>
            <button type={type} onClick={onClick} className="btn-afront">{text}</button>
        </div>
    )
};

export default ButtonAC;