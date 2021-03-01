import React from 'react';

export const Body = props => {
    
    return (
        <div style={styles.body}>
            {
                props.body
            }
        </div>
    )
};

const styles = {
    body: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
    }
}
