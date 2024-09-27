import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Modal from "components/modal";
import AlumniTabBody from "../components/tabBody/alumniTabBody";
import DashboardTabBody from "../components/tabBody/dashboardTabBody";

import { useRouter } from "next/router"
import ProjectsTabBody from "components/tabBody/projectsTabBody";

export default function Admin({ children }) {

  const [sidebarToggle, setSidebarToggle] = React.useState(1);
  const [modalToggle, setModalToggle] = React.useState("");
  const [alumniTab, setAlumniTab] = React.useState(0);
  const [alumniData, setAlumniData] = React.useState(null);
  const [dashboardTab, setDashboardTab] = React.useState(0);

  const [reloadChild, setReloadChild] = React.useState(0);
  const [settingsEdit, setSettingsEdit] = React.useState(0);

  const router = useRouter()

  const handleReloadChild = () => {
    // No action needed here, only pass the handler function to the ChildComponent
  };

  return (
    
     
      <div className={`flex  h-fit  bg-[#F9FAFE] `}>
        <div>
          <Sidebar  />
        </div>
        
        <div className="flex flex-col  w-full h-screen ">
          {/* admin header nav */}
          <AdminNavbar sidebarToggle = {sidebarToggle} setModalToggle = {setModalToggle} setAlumniTab = {setAlumniTab} alumniTab = {alumniTab} setDashboardTab = {setDashboardTab} dashboardTab = {dashboardTab}  setSettingsEdit ={setSettingsEdit} settingsEdit= {settingsEdit}/>
          {/* Header */}
          <div className="   bg-opacity-50 flex-grow  p-4    max-w-full  flex flex-col  justify-between  ">
            <div className="  bg-white h-full w-full rounded-3xl p-3">
              {/* admin body */}
              {/* {children} */}
              {React.Children.map(children, (child) => {
                return React.cloneElement(child, { reloadChild:reloadChild,setReloadChild:setReloadChild });
              })}
              {router.route == "/admin/alumniManagement" ? <AlumniTabBody alumniTab = {alumniTab} setModalToggle = {setModalToggle} setAlumniData={setAlumniData} reloadChild={reloadChild} setReloadChild={setReloadChild} /> : <></> }
              {router.route == "/admin/dashboard" ? <DashboardTabBody  dashboardTab = {dashboardTab}  reloadChild={reloadChild} setReloadChild={setReloadChild} />  : <></> }
              {router.route == "/admin/projects" ? <ProjectsTabBody  dashboardTab = {dashboardTab}  reloadChild={reloadChild} setReloadChild={setReloadChild} />  : <></> }

              <Modal modalToggle = {modalToggle} setModalToggle = {setModalToggle}  alumniData ={alumniData} setAlumniData={setAlumniData} alumniTab = {alumniTab} dashboardTab = {dashboardTab}  setReloadChild={setReloadChild}  settingsEdit= {settingsEdit} setSettingsEdit ={setSettingsEdit}/>
            </div>
            
          </div>
          <div className="">
            <FooterAdmin />
          </div>
        </div>
        
      </div>
 
  );
}
