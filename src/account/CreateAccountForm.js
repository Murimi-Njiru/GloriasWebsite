import { PrimaryButton, TextField } from '@fluentui/react';
import React, { useState } from 'react';

export const CreateAccountForm = props => {
    const [emailAddress,setEmailAddress]=useState("");
    const [password,setPassword]=useState("");

    const textFieldValidation = (type,value)=>{
        
    }
    
    return (
        <form id="createAccountForm" style={styles.createAccountForm}>
            <h2>Create an account.</h2>
            <TextField id="emailAddressTxtFld" label="Email Address" value={emailAddress} onChange={e=>setEmailAddress(e.target.value)}/>
            <TextField id="passwordTxtFld" label="Password" value={password} type="password" canRevealPassword onChange={e=>setPassword(e.target.value)}/>
            <TextField id="verifyPasswordTxtFld" label="Verify Password" type="password" canRevealPassword/>
            <PrimaryButton id="submitBtn" text="Submit" href="#/registration" style={styles.submitBtn} onClick={()=>{
                let details = {
                    emailAddress:emailAddress,
                    password:password
                }
                console.log(details);
            }}/>
        </form>
    )
}

const styles = {
    createAccountForm: {
        display:"flex",
        flexDirection:"column",
        width:"60%",
        paddingLeft: "10px",
    },
    submitBtn: {
        marginTop:"10px",
        width:"fit-content"
    }
}
