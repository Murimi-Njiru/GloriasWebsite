import { IconButton } from '@fluentui/react';
import React from 'react';

export const Header = () => {
    
    return (
        <div style={styles.header}>
            <h1 style={styles.title}>
                RBMR
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
        backgroundColor: "#2d2d30",
        height:"fit-content",
        width:"100%"
    },
    title: {
        fontSize:"32px",
        margin:"5px 5px 5px 5px",
        color: "#d5d5d5"
    }
}
