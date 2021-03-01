import { ProgressIndicator } from "@fluentui/react";
import React, { useState } from "react";
import { WebPage } from "../components/webPage/WebPage";
import { ContactDetailsForm } from "./ContactDetailsForm";
import { HealthDetailsForm } from "./HealthDetailsForm";
import { PersonalDetailsForm } from './PersonalDetailsForm';
import { RegistrationComplete } from "./RegistrationComplete";
import { RegistrationReview } from "./RegistrationReview";

export const Registration = props => {
    const [registrationCounter,setRegistrationCounter]=useState(0);
    const [collectedData,setCollectedData]=useState({
        personalDetails:{},
        healthDetails:{},
        contactDetails:{}
    });

    const collectData = (formName,formData) =>{
        let tempCollectedData = collectedData;
        Object.assign(tempCollectedData,{
            [formName]:formData
        });
        setCollectedData(tempCollectedData);

        //once data is collected, move to the next component
        let tempRegistrationCounter = registrationCounter+3;
        setRegistrationCounter(tempRegistrationCounter); 
    }

    const goBackToForm = formCount => {
        setRegistrationCounter(formCount);
    }

    const loadRegistrationComponent = () =>{
        switch(registrationCounter)
        {
            case 0: return <PersonalDetailsForm collectedData={collectedData} collectData={data=>collectData("personalDetails",data)}/>
            case 3: return <ContactDetailsForm collectedData={collectedData} collectData={data=>collectData("contactDetails",data)}/>
            case 6: return <HealthDetailsForm collectedData={collectedData} collectData={data=>collectData("healthDetails",data)}/>
            case 9: return <RegistrationReview collectedData={collectedData} goBackToForm={formCount=>goBackToForm(formCount)} detailsConfirmed={()=>{setRegistrationCounter(10)}}/>
            case 10: return <RegistrationComplete />
            default :

            break;
        }
    };
    
    const body = ()=> {
        return (
            <div style={styles.registrationContainer}>
                <div style={styles.registrationProgressIndicator}>
                <ProgressIndicator id="registrationProgressIndicator"  barHeight={5} label="Registration Progress" description={"You are "+registrationCounter*10+"% complete!"} percentComplete={registrationCounter/10}/>
                </div>
                {
                    loadRegistrationComponent()
                }
            </div>
        )
    }
    return (
        <WebPage body={body()} />
    );
}

const styles = {
    registrationContainer: {
        display:"flex",
        flexDirection:"column"
    },
    registrationProgressIndicator: {
        width:"95%",
        marginLeft:"10px",
        backgroundColor:"white",
    }
}

