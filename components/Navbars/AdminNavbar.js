import React from "react";
import { useEffect, useState } from "react"

import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { useRouter } from "next/router"
import { Tabs,Tab } from "./components/tabs";

export default function Navbar(props) {
  const router = useRouter()
  const [NavTitle, setNavTitle] = useState({
    "/admin/dashboard" : "Dashboard",

    "/admin/alumniManagement" : "Alumni Management",
    "/admin/settings" : "Settings",
    "/admin/projects" : "Projects"

  })
 

    return(<>
          <Tabs>
            <Tab route="/admin/projects" navTitle = "Projects" tabSections={["code Template","Test Cases","Documentation"]} setActiveTabSection = {props.setDashboardTab} activeTabSection={props.dashboardTab} />
            <Tab route="/admin/dashboard" navTitle = "Dashboard" tabSections={["code Template","Test Cases","Documentation"]} setActiveTabSection = {props.setDashboardTab} activeTabSection={props.dashboardTab} />

          </Tabs>
    </>)
 
}
