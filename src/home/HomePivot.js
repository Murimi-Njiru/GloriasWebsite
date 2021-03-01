import { PrimaryButton } from "@fluentui/react";
import React from "react";


export const HomePivot = props => {


    return (
        <div style={styles.mainContainer}>
            <p>
                Pariatur nostrud pariatur ad minim est minim in ullamco exercitation. Non ut cupidatat pariatur incididunt culpa elit nostrud exercitation elit quis ut velit.
                Officia fugiat ut deserunt laborum pariatur mollit qui dolore nisi.
                Laboris mollit enim aliqua elit consequat Lorem. Ipsum occaecat enim culpa duis in.
            </p>
            <p>
                Pariatur nostrud pariatur ad minim est minim in ullamco exercitation. Non ut cupidatat pariatur incididunt culpa elit nostrud exercitation elit quis ut velit.
                Officia fugiat ut deserunt laborum pariatur mollit qui dolore nisi.
                Laboris mollit enim aliqua elit consequat Lorem. Ipsum occaecat enim culpa duis in.
            </p>
            <p>
                Pariatur nostrud pariatur ad minim est minim in ullamco exercitation. Non ut cupidatat pariatur incididunt culpa elit nostrud exercitation elit quis ut velit.
                Officia fugiat ut deserunt laborum pariatur mollit qui dolore nisi.
                Laboris mollit enim aliqua elit consequat Lorem. Ipsum occaecat enim culpa duis in.
            </p>
            <PrimaryButton style={styles.registerBtn} href="#/registration">
                Register
            </PrimaryButton>
        </div>
    )
};

const styles= {
    mainContainer: {
        display:"flex",
        flexDirection:"column",
        paddingLeft:"10px"
    },
    registerBtn: {
        alignSelf: "center"
    }
}