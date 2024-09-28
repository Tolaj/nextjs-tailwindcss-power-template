import React from "react";
import { useEffect, useState } from "react"

import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { useRouter } from "next/router"
import { Tabs,Tab } from "./components/tabs";

export default function Navbar(props) {

    return(<>
          <Tabs>
            <Tab route="/admin/projects" navTitle = "Projects" tabSections={["Create Project"]} setActiveTabSection = {props._as.setDashboardTab} activeTabSection={props._as.dashboardTab} tagType="ADD_BUTTON" />
            <Tab route="/admin/dashboard" navTitle = "Dashboard" tabSections={["code Template","Test Cases","Documentation"]} setActiveTabSection = {props._as.setDashboardTab} activeTabSection={props._as.dashboardTab} />
          </Tabs>
    </>)
 
}
