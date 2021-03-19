import React from "react";
import { useHistory } from "react-router";
import { PageComponent } from './../components/page-component/page-component';


export const HomePivot = props => {
    const history=useHistory();

    const page={
        curtain:{
            primary:{
                title:"Hello, world!",
                content:"It is very easy to become a donor"
            },
            secondary:{
                title:"",
                content:"Want to know more? Learn how it works.",
                actions:[{
                    title:"Learn More",
                    type:"primary",
                    event:()=>{
                       // history.push("registration")
                    }
                }]
            }
        },
        header: {
            title:"",
            content:"The Rwanda Bone Marrow Registry helps people find stem cell matches. The aim of this registry is to Partner with the Ministry of Health and major hospitals in Kigali to encourage Rwandans to become Stem cell donors.",
        },
        content:[{
            title:"What is Bone Marrow?",
            content:"Bone marrow is soft, spongy tissue in the body that contains hematopoietic stem cells. It is found in the center of most bones. Hematopoietic stem cells are also found in the blood that is moving throughout your body."
        },{
            title:"Who needs bone marrow Transplants?",
            content:"Many people with blood cancers, such as leukemia and lymphoma, sickle cell anemia, and other life-threatening diseases, rely on bone marrow or cord blood transplants to survive. Healthy bone marrow and blood cells are needed in order to live. When disease affects bone marrow so that it can no longer function effectively, a marrow or cord blood transplant could be the best treatment option; for some patients it is the only potential cure."
        }]
    };


    return (
        <PageComponent data={page} />
    )
};