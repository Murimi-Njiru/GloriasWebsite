import { FontIcon, PrimaryButton } from "@fluentui/react";
import React from "react";

export const RegistrationComplete = props => {
    
    return (
        <div style={{alignSelf:"center"}}>
            <FontIcon iconName="Accept" style={{fontSize:"200px"}}/>
            <h3>Registration Complete</h3>
            <PrimaryButton id="finishBtn" text="Finish" href="#/" style={{width:"fit-content"}}/>
        </div>
    )
}
