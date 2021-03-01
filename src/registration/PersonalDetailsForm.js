import { ChoiceGroup, DatePicker, DayOfWeek, PrimaryButton, TextField } from '@fluentui/react';
import React, { useState } from 'react';

const genderOptions=[{
    key:"male",
    text:"Male"
},{
    key:"female",
    text:"Female"
}];

const maritalStatusOptions=[{
    key:"married",
    text:"Married"
},{
    key:"widowed",
    text:"Widowed"
},{
    key:"separated",
    text:"Separeted"
},{
    key:"divorced",
    text:"Divorced"
},{
    key:"single",
    text:"Single"
}];

const DayPickerStrings = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker',
    monthPickerHeaderAriaLabel: '{0}, select to change the year',
    yearPickerHeaderAriaLabel: '{0}, select to change the month',
    isRequiredErrorMessage: 'Start date is required.',
    invalidInputErrorMessage: 'Invalid date format.',
};

export const PersonalDetailsForm = props => {

    const collectedPersonalDetails=props.collectedData.personalDetails;
    
    const [name,setName]=useState(collectedPersonalDetails.name);
    const [dateOfBirth,setDateOfBirth]=useState(collectedPersonalDetails.dateOfBirth);
    const [gender,setGender]=useState(collectedPersonalDetails.gender);
    const [maritalStatus,setMaritalStatus]=useState(collectedPersonalDetails.maritalStatus);

    const validateForm = ()=>{
        //false is valid
        if(name && dateOfBirth && gender && maritalStatus)
        {
            return false;
        }
        else 
        {
            return true;
        }
    };

    const getKey = (text,options)=>{
        let option =options.find(option=>option.text === text);       
        return option ? option.key : "empty";
    };
    
    return (
        <form id="accountForm" style={styles.accountForm}>
            <h3>Personal Details</h3>
            <TextField 
                id="nameTxtFld" 
                label="Name" 
                value={name} 
                styles={{ root: { width: 300 } }}
                onChange={e=>setName(e.target.value)} 
                required
            />
            <ChoiceGroup 
                id="genderChoiceGroup" 
                label="Gender" 
                options={genderOptions} 
                defaultSelectedKey={getKey(gender,genderOptions)} 
                styles={{ root: { width: 300 } }}
                onChange={(e,option)=>setGender(option.text)} 
                required
            />
            <ChoiceGroup 
                id="maritalStatusChoiceGroup" 
                label="Marital Status" 
                options={maritalStatusOptions} 
                defaultSelectedKey={getKey(maritalStatus,maritalStatusOptions)} 
                styles={{ root: { width: 300 } }}
                onChange={(e,option)=>setMaritalStatus(option.text)} 
                required
            />
            <DatePicker 
                firstDayOfWeek={DayOfWeek.Sunday}
                strings={DayPickerStrings}
                label="Date of Birth"
                placeholder="Select a date..."
                showMonthPickerAsOverlay={true}
                ariaLabel="Select a date"
                value={dateOfBirth && new Date(dateOfBirth)}
                isRequired={true}
                styles={{ root: { width: 300 } }}
                onSelectDate={d=>setDateOfBirth(d.getTime())}
            />
            <PrimaryButton id="nextBtn" text="Next" style={styles.nextBtn} disabled={validateForm()} onClick={()=>{
                let personalDetails = {
                    name:name,
                    dateOfBirth:dateOfBirth,
                    gender:gender,
                    maritalStatus:maritalStatus
                }
                props.collectData(personalDetails);
            }}/>
        </form>
    )
}

const styles = {
    accountForm: {
        display:"flex",
        flexDirection:"column",
        paddingLeft: "10px",
        marginBottom:"10px"
    },
    nextBtn: {
        marginTop:"10px",
        width:"fit-content"
    }
}
