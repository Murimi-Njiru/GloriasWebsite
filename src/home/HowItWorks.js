
import React from "react";
import { PageComponent } from "../components/page-component/page-component";

export const HowItWorks = () => {
    
    const page={
        curtain:{
            primary:{
                title:"How It Works",
            },
        },
        header: {
            title:"Donating Stem Cells",
            content:"There are two types of donation for registered stem Cell Donors:",
        },
        content:[{
            title:"Peripheral blood Stem cell (PBSC)",
            content:"PBSC are collected from circulating (peripheral) blood. Since only a small number of (blood) stem cells is released into the blood stream, a cell growth stimulating drug is administered to donors prior to the donation to dramatically increase the volume of stem cells in the blood for collection and transplant. \n\n"+
                    "PBSC donors receive an injection of a drug called granulocyte colony stimulating factor (G-CSF) every day for four days prior to the donation. These injections stimulate the production and release of stems cells from the bone marrow into the blood stream. Additional injection(s) may be required on the day of the donation. T he stem cells are then collected using a procedure called apheresis.\n\n"+
                    "Apheresis is a collection method where only the stem cells are separated and collected during donation. The remaining blood components are returned to the donor. This is a non-surgical procedure and takes approximately four-six hours. In some cases, a second donation is required the following day."
        },{
            title:"Bone Marrow Stem cell donation:",
            content:"Bone marrow stem cell donation is a surgical procedure performed under anesthesia. The physician administering the donation uses a special hollow needle to withdraw liquid marrow from the back of the pelvic (hip) bones . The procedure usually lasts 45 to 90 minutes.\n\n"+
                    "The amount collected can range from 0.5 litres to 1.5 litres depending on the number of stem cells the patient needs. This is calculated based on the height and weight of the donor and patient."
        }]
    };

    return(
        <PageComponent data={page}/>
    )
}
