import React from "react";
import "./primary-curtain-component-styles.css";
export const PrimaryCurtainComponent = props=> {
    const data=props.data

    return (
        <div className="PrimaryCurtainContainer">
            <h2>
                {data.title}
            </h2>
            <p>
                {data.content}
            </p>
        </div>
    );
}
