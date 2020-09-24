import React from 'react';

const Button = ({text, disabled}) => {
    return <div  style={ !disabled ? { pointerEvents: "none", opacity: "0.4" } : {}} className="mc_btn_basic01" >{text}</div>
}


export default Button;