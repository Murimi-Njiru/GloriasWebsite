import React from "react";
import { DefaultButton } from '@fluentui/react';

export const ButtonComponent = props => {

    const data=props.action;

    return (
        <DefaultButton
            className="ButtonComtainer"
            primary={data.type==="primary"?true:false}
            onClick={data.event}    
        >
            {data.title}
        </DefaultButton>
    );
}
