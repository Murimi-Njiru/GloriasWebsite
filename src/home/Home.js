import { Pivot, PivotItem,} from "@fluentui/react";
import React from "react";
import { WebPage } from "../components/webPage/WebPage";
import { HomePivot } from './HomePivot';
import { HowItWorks } from "./HowItWorks";
import { CreateAccountForm } from "../account/CreateAccountForm";

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
                    headerText="How it works"
                >
                    <HowItWorks />
                </PivotItem>
                <PivotItem
                    headerText="Register"
                >
                    <CreateAccountForm />
                </PivotItem>
            </Pivot>
        )
    }

    return (
        <WebPage body={body()}/>
    );
};