import { useRouter } from 'next/router';
import React from 'react';

function Tabs({children},props) {
    const router = useRouter()
    const currentChild = children.length > 1? children.filter(item => item.props.route === router.route) : children.props.route == router.route ? children : "No Tab For This Route";
    return currentChild    
}

const Tab = (props) => {
    return(
        <>
        
        <nav className=" pt-10 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
            <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">            
                <a
                    className={` text-black text-lg uppercase hidden  lg:inline-block font-bold `}
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    { props.navTitle }                  
                </a>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    {props.tabSections.map((section,index)=>{
                        return(
                            <>
                                <li className="mr-2" onClick={()=>{props.setActiveTabSection(index)}}>
                                    <a href="#" aria-current="page" className={`inline-block p-4 ${props.activeTabSection == index ? "text-white bg-gray-900 active" : "text-gray-500 hover:text-gray-600 hover:bg-gray-100  " }  rounded-t-lg   `}>{section}</a>
                                </li>
                            </>
                        )
                    })}
                </ul>              
               
            </div>
        </nav>
        
        </>
    )
}

Tabs.Tab = Tab;

export { Tabs, Tab };
