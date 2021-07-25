import React from "react";

const Button = ({ background, color, text, func }) => {
    return (
        <button className="button" style={{ background, color }} onClick={func}>
            {text}
        </button>
    );
};

export default Button;
