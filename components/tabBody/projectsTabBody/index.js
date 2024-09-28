import React from "react";
import ContactList from "./contactList";
import AdmissionEnquiry from "./admissionEnquiry";
import NewsLetters from "./newsLetters";
import CreateProject from "./createProject";
// components



// layout for page


export default function ProjectsTabBody(props) {
    switch(props._as.dashboardTab){
        case 0 :return (
            <>
              <CreateProject _as = {props._as}  />              
            </>
          );
        default: return(<>Default Tab Body</>)
    }
  
}



