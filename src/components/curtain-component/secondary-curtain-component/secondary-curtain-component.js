import React from "react";
import "./secondary-curtain-component-styles.css"
import { ButtonComponent } from "../../button-component/button-component";

export const SecondaryCurtainComponent = props => {
    const data=props.data

    const actions=()=>{
        return data.actions.map(action=><ButtonComponent action={action}/>)
    }

    return (
        <div className="SecondaryCurtainContainer">
            <hr />
            <h2>
                {data.title}
            </h2>
            <p>
                {data.content}
            </p>
            <div className="SecondaryCurtainActionsContainer">
                {
                    data.actions && actions()
                }
            </div>
        </div>
    );
}
