import { DefaultButton, PrimaryButton } from '@fluentui/react';
import React from 'react';

export const RegistrationReview = props => {
    const collectedData=props.collectedData;

    const personalDetailsCard = ()=>{
        let personalDetails=collectedData.personalDetails
        return (
            <div id="personalDetailsCard" style={styles.detailsCardContainer}>
                <h4 style={styles.detailsTitle}>Personal Details</h4>
                <p id="namePersonalDetail" style={styles.detailsContent}>{"Name : "+personalDetails.name}</p>
                <p id="genderPersonalDetail" style={styles.detailsContent}>{"Gender : "+personalDetails.gender}</p>
                <p id="maritalStatusPersonalDetail" style={styles.detailsContent}>{"Marital Status : "+personalDetails.maritalStatus}</p>
                <p id="dateOfBirthPersonalDetail" style={styles.detailsContent}>{"Date Of Birth : "+new Date(personalDetails.dateOfBirth).toUTCString()}</p>
                <DefaultButton id="changePersonalDetailsBtn" text="Change" style={styles.changeDetailsBtn} onClick={()=>props.goBackToForm(0)}/>
                <hr style={{width:"100%",color:"black"}}/>
            </div>
        )
    };

    const contactDetailsCard = ()=>{
        let contactDetails=collectedData.contactDetails
        return (
            <div id="contactDetailsCard" style={styles.detailsCardContainer}>
                <h4 style={styles.detailsTitle}>Contact Details</h4>
                <p id="addressLine1ContactDetail" style={styles.detailsContent}>{"Address Line 1 : "+contactDetails.addressLine1}</p>
                <p id="addressLine2ContactDetail" style={styles.detailsContent}>{"Address Line 2 : "+contactDetails.addressLine2}</p>
                <p id="countryContactDetail" style={styles.detailsContent}>{"Country : "+contactDetails.country}</p>
                <p id="cityContactDetail" style={styles.detailsContent}>{"City : "+contactDetails.city}</p>
                <p id="occupationStatusContactDetail" style={styles.detailsContent}>{"Occupation Status : "+contactDetails.occupationStatus}</p>
                <p id="occupationNameContactDetail" style={styles.detailsContent}>{"Occupation Name : "+contactDetails.occupationName}</p>
                <p id="pOBoxContactDetail" style={styles.detailsContent}>{"P.O Box : "+contactDetails.pOBox}</p>
                <p id="phoneNumberContactDetail" style={styles.detailsContent}>{"Phone Number: "+contactDetails.phoneNumber}</p>
                <DefaultButton id="changeContactDetailsBtn" text="Change" style={styles.changeDetailsBtn} onClick={()=>props.goBackToForm(3)}/>
                <hr style={{width:"100%",color:"black"}}/>
            </div>
        )
    };

    const healthDetailsCard = ()=>{
        let healthDetails=collectedData.healthDetails;

        return (
            <div id="healthDetailsCard" style={styles.detailsCardContainer}>
                <h4 style={styles.detailsTitle}>Health Details</h4>
                <p id="heightHealthDetail" style={styles.detailsContent}>{"Height: "+healthDetails.height}</p>
                <p id="massHealthDetail" style={styles.detailsContent}>{"Mass: "+healthDetails.mass}</p>
                <p id="bloodGroupHealthDetail" style={styles.detailsContent}>{"Blood Group: "+healthDetails.bloodGroup}</p>
                <DefaultButton id="changeHealthDetailsBtn" text="Change" style={styles.changeDetailsBtn} onClick={()=>props.goBackToForm(6)}/>
                <hr style={{width:"100%",color:"black"}}/>
            </div>
        )
    };


    
    return (
        <div id="registrationReviewContainer" style={styles.registrationReviewContainer}>
            <h3>Registration Review</h3>
            {
                personalDetailsCard()
            }           
            {
                contactDetailsCard()
            }
            {
                healthDetailsCard()
            }
            <PrimaryButton id="confirmBtn" text="Confirm" style={styles.confirmDetailsBtn} onClick={()=>props.detailsConfirmed()}/>
        </div>
    )
}

const styles = {
    registrationReviewContainer : {
        display:"flex",
        flexDirection:"column",
        paddingLeft:"10px",
        marginBottom:"10px"
    },
    detailsCardContainer: {
        display:"flex",
        flexDirection:"column",
        width:"90%",
        paddingLeft:"10px",
        marginBottom:"10px"       
    },
    detailsTitle: {
        fonstSize:"16spx",
        fontWeight:'bold'
    },
    detailsContent: {
        fontSize:"14px",
        paddingLeft:"20px"
    },
    changeDetailsBtn: {
        alignSelf:"flex-end",
        width:"fit-content",
        marginRight:"10px"
    },
    confirmDetailsBtn: {
        width:"fit-content",
    }
}