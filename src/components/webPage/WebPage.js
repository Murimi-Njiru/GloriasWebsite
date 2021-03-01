import React from 'react';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';

export const WebPage = props => {


    return (
        <div id="pageContainer" style={styles.pageContainer}>
            <div id="headerContainer" style={styles.headerContainer}>
                <Header />
            </div>
            <div id="bodyContainer" style={styles.bodyContainer}>
                <Body body={props.body}/>
            </div>
            <div id="footerContainer" style={styles.footerContainer}>
                <Footer />
            </div>
        </div>
    )
}

const styles = {
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflowX:"hidden",
        height: "100vh"
    },
    headerContainer: {
        width: "100%",
        height:"fit-content",
        position: "sticky",
        top: "0",
        backgroundColor:"white"
    },
    bodyContainer: {
        display:"flex",
        width: "100%",
        height:"100%",
        overflowY:"auto"
    },
    footerContainer: {
        height:"30px",
        width:"100%",
        backgroundColor:"black"
    },
}
