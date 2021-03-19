import React from "react";
import "./page-component-styles.css";
import { SectionComponent } from './../section-component/section-component';
import { CurtainComponent } from './../curtain-component/curtain-component';

export const PageComponent = props => {
    const data=props.data;
    
    return (
        <div className="PageContainer">
            <div className="CurtainContainer">
                {
                    data.curtain && <CurtainComponent data={data.curtain}/>
                }
            </div>
            <div className="HeaderContainer">
                {
                    data.header && <SectionComponent data={data.header}/>
                }
            </div>
            <div className="ContentContainer">
                {
                    data.content.map(data=><SectionComponent data={data}/>)
                }
            </div>
        </div>
    );
}
