import React from "react";
import { PrimaryCurtainComponent } from "./primary-curtain-component/primary-curtain-component";
import { SecondaryCurtainComponent } from './secondary-curtain-component/secondary-curtain-component';
import "./curtain-component-styles.css"
export const CurtainComponent = props => {

    const data=props.data;
    
    return (
        <div className="ParentContainer">
            <PrimaryCurtainComponent data={data.primary}/>
            {
                data.secondary && (<SecondaryCurtainComponent data={data.secondary}/>)
            }
        </div>
    );
}
