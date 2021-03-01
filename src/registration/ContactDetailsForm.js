import { Dropdown, PrimaryButton, TextField, ChoiceGroup } from '@fluentui/react';
import React, { useEffect, useState } from 'react';


const occupationStatusOptions = [{
        key:"employed",
        text:"Employed"
    },
    {
        key:"notEmployed",
        text:"Not Employed"
    },
    {
        key:"student",
        text:"Student"
    }
];

const getCountries = async ()=>{
    const response = await fetch(
        'https://parseapi.back4app.com/classes/Continentscountriescities_Country?limit=195&order=name&keys=name',
        {
            headers: {
                'X-Parse-Application-Id': 'WPikffNIp74chv6PV0EBPgkNL5k8ZQN9BJrSZrFS', // This is your app's application id
                'X-Parse-REST-API-Key': 'q2NCh1yFDeocesrzE07oBP77RdlYzUOAoya57emf', // This is your app's REST API key
            }
        }
    );
    const data = await response.json(); // Here you have the data that you need  
    return data.results.map(result=>{
        return {
            key:result.objectId,
            text:result.name
        }
    });
};

const getCities = async countryKey =>{
    const where = encodeURIComponent(JSON.stringify({
        "country": {
            "__type": "Pointer",
            "className": "Continentscountriescities_Country",
            "objectId": countryKey
        }
    }));
    const response = await fetch(
        `https://parseapi.back4app.com/classes/Continentscountriescities_City?order=name&keys=name&where=${where}`,
        {
            headers: {
                'X-Parse-Application-Id': 'WPikffNIp74chv6PV0EBPgkNL5k8ZQN9BJrSZrFS', // This is your app's application id
                'X-Parse-REST-API-Key': 'q2NCh1yFDeocesrzE07oBP77RdlYzUOAoya57emf', // This is your app's REST API key
            }
        }
    );
    const data = await response.json(); // Here you have the data that you need  
    return data.results.map(result=>{
        return {
            key:result.objectId,
            text:result.name
        }
    });
};

export const ContactDetailsForm = props => {

    const collectedContactDetails=props.collectedData.contactDetails;

    const [country,setCountry]=useState(collectedContactDetails.country);
    const [city,setCity]=useState(collectedContactDetails.city); // either city or town
    const [phoneNumber,setPhoneNumber]=useState(collectedContactDetails.phoneNumber);
    const [addressLine1,setAddressLine1]=useState(collectedContactDetails.addressLine1);
    const [addressLine2,setAddressLine2]=useState(collectedContactDetails.addressLine2);
    const [occupationStatus,setOccupationStatus]=useState(collectedContactDetails.occupationStatus);
    const [occupationName,setOccupationName]=useState(collectedContactDetails.occupationName="");
    const [pOBox,setPOBox]=useState(collectedContactDetails.pOBox);

    const [countryOptions,setCountryOptions]=useState([]);
    const [cityOptions,setCityOptions]=useState([]);

    const validateForm = () =>{
        //false is valid
        if(country && city && phoneNumber && addressLine1 && addressLine2 && occupationStatus && pOBox)
        {
            return false
        }
        else
        {
            return true;
        }
    };

    const getKey = (text,options)=>{
        if(Array.isArray(options))    
        {
            let option =options.find(option=>option.text === text); 
            return option ? option.key : "empty";
        } 
        else 
        {
            return "notArray";
        }    
    };
    
    useEffect(()=>{
        console.log(countryOptions);
        if(countryOptions.length === 0)
        {
            getCountries().then(response=>setCountryOptions(response)).catch(error=>console.error(error));
        }
        if(cityOptions.length === 0 && country && countryOptions.length > 0)
        {
            getCities(getKey(country,countryOptions)).then(response=>setCityOptions(response)).catch(error=>console.error(error));
        }    
    });



    return (
        <form style={styles.contactDetailsForm}>
            <h3>Contact Details</h3>
            <TextField 
                id="addressLine1TxtFld" 
                label="Address Line 1" 
                value={addressLine1} 
                styles={{ root: { width: 300 } }}
                onChange={e=>setAddressLine1(e.target.value)}  
                required
            />
            <TextField 
                id="addressLine2TxtFld" 
                label="Address Line 2"
                value={addressLine2} 
                styles={{ root: { width: 300 } }}
                onChange={e=>setAddressLine2(e.target.value)}  
                required
            />
            <TextField 
                id="phoneNumberTxtFld" 
                label="Phone Number" 
                value={phoneNumber} 
                styles={{ root: { width: 300 } }}
                onChange={e=>{setPhoneNumber(e.target.value)}}  
                required
            />
            <TextField 
                id="pOBoxTxtFLd" 
                label="PO Box" 
                value={pOBox}
                styles={{ root: { width: 300 } }} 
                onChange={e=>{setPOBox(e.target.value)}}  
                required
            />            
            <Dropdown 
                id="countryDropDown"
                placeholder="Select an option"
                label="Country" 
                options={countryOptions} 
                styles={{ dropdown: { width: 300 } }}
                defaultSelectedKey={getKey(country,countryOptions)} 
                onChange={(e,option)=>{
                    setCountry(option.text);
                    setCityOptions([]);
                }}
                required
            />
            <Dropdown 
                id="cityDropDown" 
                placeholder="Select an option" 
                label="City / Town" 
                options={cityOptions} 
                styles={{ dropdown: { width: 300 } }}
                defaultSelectedKey={getKey(city,cityOptions)} 
                onChange={(e,option)=>setCity(option.text)} 
                required
            />
            <ChoiceGroup 
                id="occupationStatusChoiceGroup" 
                label="Occupation Status" 
                options={occupationStatusOptions} 
                defaultSelectedKey={getKey(occupationStatus,occupationStatusOptions)} 
                styles={{ root: { width: 300 } }}
                onChange={(e,option)=>setOccupationStatus(option.text)}
                required
            />
            <TextField 
                id="occupationNameTxtFLd" 
                label="Occupation Name" 
                value={occupationName} 
                onChange={e=>{setOccupationName(e.target.value)}} 
                styles={{ root: { width: 300 } }} 
                required
            />                       
            <PrimaryButton 
                id="nextBtn" 
                text="Next" 
                style={styles.nextBtn} 
                disabled={validateForm()} 
                onClick={()=>{
                    let contactDetails = {
                        addressLine1:addressLine1,
                        addressLine2:addressLine2,
                        phoneNumber:phoneNumber,
                        pOBox:pOBox,
                        country:country,
                        city:city,
                        occupationStatus:occupationStatus,
                        occupationName:occupationName
                    }
                    props.collectData(contactDetails);
            }}/>
        </form>
    )
};

const styles = {
    contactDetailsForm: {
        display:"flex",
        flexDirection:"column",
        paddingLeft: "10px",
        marginBottom:"10px"
    },
    nextBtn: {
        marginTop:"10px",
        width:"fit-content",
    },
    inputField :{
        width:"300px"
    }
}
