import React from "react";
import './value.css';

const Value = ({toCount}) => {
    return (
        <div className="value">
            <h1>{toCount}</h1>
        </div>
    );
}

export default Value;