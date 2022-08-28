import React from "react";
import './styles.css';

export const BodyWrapper = (props) => {
    return (
        <div className="body">
            <div className="body-wrapper">
                {props.children}
            </div>
        </div>
    )
}