import React from "react";

const NumberButton = (props) => {

    const clickHandler = (event) =>{
        props.onPress(props.val);
    }
    
    return (
        <button onClick={clickHandler}>{props.val}</button>
    );
};

export default NumberButton;