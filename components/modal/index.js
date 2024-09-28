import React from "react";

import AlumniListModal from "./alumniListModal"
import AlumniActivitiesModal from "./alumniActivitiesModal"
import AlumniAchievementsModal from "./alumniAchivementsModal"
import AlumniGalleryModal from "./alumniGalleryModal"
import SettingModal from "./settingModal"

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(true);
  switch(props._as.modalToggle){

    case "/admin/alumniManagement" : 
              if(props._as.alumniTab == 0){
                return(<AlumniListModal _as = {props._as} />);
              } else if(props._as.alumniTab == 1) {
                return(<AlumniActivitiesModal _as = {_as}  />);
              } else if(props._as.alumniTab == 2){
                return(<AlumniAchievementsModal _as = {_as} />);
              } else {
                return(<AlumniGalleryModal _as = {_as} />);
              }

    case "/admin/settings" : 
              if(props._as.settingsEdit == 1){
                return(<SettingModal  _as = {_as} />);
              } else{
                return null
              }
        
    default: return null;
  }
 
}