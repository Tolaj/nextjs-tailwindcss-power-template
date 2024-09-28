import React from "react";
import { useRouter } from "next/router"

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Modal from "components/modal";
import DashboardTabBody from "../components/tabBody/dashboardTabBody";
import ProjectsTabBody from "components/tabBody/projectsTabBody";
import useDynamicState from "../utils/dynamicState";

export default function Admin({ children }) {

  const router = useRouter()

  let _as = useDynamicState(
    'modalToggle',
    'reloadChild',
    'alumni',
    'dashboard',
    'projects'
  )
  
  return (

      <div className={`flex  h-fit  bg-[#F9FAFE] `}>
        <div>
          <Sidebar  />
        </div>
        <div className="flex flex-col  w-full h-screen ">
          {/* admin header nav */}
          <AdminNavbar _as = {_as} />
          {/* admin body */}
          <div className="   bg-opacity-50 flex-grow  p-4    max-w-full  flex flex-col  justify-between  ">
            <div className="  bg-white h-full w-full rounded-3xl p-3">
              {React.Children.map(children, (child) => {
                return React.cloneElement(child, { reloadChild:_as.reloadChild,setReloadChild:_as.setReloadChild });
              })}        
              {router.route == "/admin/dashboard" ? <DashboardTabBody  _as = {_as} />  : <></> }
              {router.route == "/admin/projects" ? <ProjectsTabBody  _as = {_as} />  : <></> }
              <Modal _as = {_as} />
            </div>  
          </div>
          <div className="">
            <FooterAdmin />
          </div>
        </div>    
      </div>
 
  );
}
