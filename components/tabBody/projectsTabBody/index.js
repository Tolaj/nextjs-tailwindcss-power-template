import React from "react";
import ContactList from "./contactList";
import AdmissionEnquiry from "./admissionEnquiry";
import NewsLetters from "./newsLetters";
import CreateProject from "./createProject";
// components



// layout for page


export default function ProjectsTabBody(props) {
   
    switch(props.dashboardTab){
        case 0 :return (
            <>
    
  

            <CreateProject reloadChild = {props.reloadChild}  setReloadChild ={props.setReloadChild} />
               
            </>
          );
          case 1 :return (
            <>
    
            <AdmissionEnquiry reloadChild = {props.reloadChild}  setReloadChild ={props.setReloadChild} />
               
            </>
          );
          case 2 :return (
            <>
    
           <NewsLetters reloadChild = {props.reloadChild}  setReloadChild ={props.setReloadChild} />
               
            </>
          );
        default: return(<>asd</>)
    }
  
}



