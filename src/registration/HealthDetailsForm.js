import { Dropdown, PrimaryButton, TextField } from '@fluentui/react';
import React, { useState } from 'react';

const bloodGroupOptions = [{
    key:"a+",
    text:"A+"
},{
    key:"a-",
    text:"A-"
},{
    key:"b+",
    text:"B+"
},{
    key:"b-",
    text:"B-"
},{
    key:"o+",
    text:"O+"
},{
    key:"o-",
    text:"O-"
},{
    key:"aB+",
    text:"AB+"
},{
    key:"aB-",
    text:"AB-"
}]
export const HealthDetailsForm = props => {

    const collectedHealthDetails = props.collectedData.healthDetails;

    const [height,setHeight]=useState(collectedHealthDetails.height);
    const [mass,setMass]=useState(collectedHealthDetails.mass);
    const [bloodGroup,setBloodGroup]=useState(collectedHealthDetails.bloodGroup);

    const validateForm = ()=>{
        //validate false
        if(height && mass && bloodGroup)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    const getKey = (text,options)=>{
        let option =options.find(option=>option.text === text);       
        return option ? option.key : "empty";
    };

    return (
        <form style={styles.healthForm}>
            <h3>Health Details</h3>
            <TextField 
                id="heightTxtFld" 
                label="Height" 
                value={height} 
                placeholder="In centimeters" 
                styles={{ root: { width: 300 } }}
                onChange={e=>!isNaN(e.target.value) && setHeight(e.target.value)} 
                required/>
            <TextField 
                id="massTxtFld" 
                label="Mass" 
                value={mass} 
                placeholder="In kilograms"
                styles={{ root: { width: 300 } }} 
                onChange={e=>!isNaN(e.target.value) && setMass(e.target.value)} 
                required/>
            <Dropdown 
                id="bloodGroupDropDown" 
                placeholder="Select an option" 
                label="Blood Group" 
                options={bloodGroupOptions} 
                styles={{ dropdown: { width: 300 } }}
                defaultSelectedKey={getKey(bloodGroup,bloodGroupOptions)} 
                onChange={(e,option)=>setBloodGroup(option.text)} 
                required
            />
            <PrimaryButton 
                id="nextBtn" 
                text="Next" 
                style={styles.nextBtn} 
                disabled={validateForm()} 
                onClick={()=>{
                    let healthData = {
                        height:height,
                        mass:mass,
                        bloodGroup:bloodGroup,
                    }
                props.collectData(healthData);
            }}/>
        </form>
    );
};

const styles = {
    healthForm: {
        display:"flex",
        flexDirection:"column",
        paddingLeft: "10px",
        marginBottom:"10px"
    },
    nextBtn: {
        marginTop:"10px",
        width:"fit-content"
    }
};