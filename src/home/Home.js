import { Pivot, PivotItem,} from "@fluentui/react";
import React from "react";
import { WebPage } from "../components/webPage/WebPage";
import { HomePivot } from './HomePivot';
import { AboutUsPivot } from './AboutUsPivot';
import { MissionPivot } from './MissionPivot';
import { VisionPivot } from './VisionPivot';

export const Home = props => {
    
    const body = ()=>{
        return (
            <Pivot>
                <PivotItem
                    headerText="Home"
                >
                    <HomePivot />
                </PivotItem>
                <PivotItem
                    headerText="About Us"
                >
                    <AboutUsPivot />
                </PivotItem>
                <PivotItem
                    headerText="Mission"
                >
                    <MissionPivot />
                </PivotItem>
                <PivotItem
                    headerText="Vision"
                >
                    <VisionPivot />
                </PivotItem>
            </Pivot>
        )
    }

    return (
        <WebPage body={body()}/>
    );
};