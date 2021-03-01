import React from 'react';

export const Footer = () => {
    
    return (
        <div style={styles.footer}> 
            <h4 style={styles.text}> Version 1.0</h4>
        </div>
    )
}

const styles = {
    footer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems: "center",
        height:"100%",
        width:"100%",
    },
    text: {
        fontSize:"12px",
        color:"white"
    }
}
