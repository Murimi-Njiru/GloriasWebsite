import React from "react"
import { ButtonComponent } from "../button-component/button-component";
import "./section-component-styles.css";
export const SectionComponent = props => {
    const data=props.data;

    const actions=() =>{
        const actionsList = data.actions;

        return actionsList.map(action=><ButtonComponent action={action}/>)
    }
    
    return (
        <div className="SectionContainer">
            <h2>
                {data.title}
            </h2>
            <p>
                {data.content}
            </p>
            <div className="SectionActionsContainer">
                {
                    data.actions && actions()
                }
            </div>
        </div>
    )
}
