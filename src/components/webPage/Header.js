import { IconButton } from '@fluentui/react';
import React from 'react';

export const Header = () => {
    
    return (
        <div style={styles.header}>
            <h1 style={styles.title}>
                Gloria's Website
            </h1>
            <IconButton iconProps={{iconName: "Contact"}}>
                
            </IconButton>
        </div>
    )
}

const styles = {
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:"fit-content",
        width:"100%"
    },
    title: {
        fontSize:"32px",
        margin:"0px 0px 0px 0px"
    }
}
