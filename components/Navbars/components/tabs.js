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
            <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">            
                <a
                    className={` text-black text-lg uppercase hidden  lg:inline-block font-bold `}
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    { props.navTitle }                  
                </a>
                <ul className={` ${props.tabSections.length>1?"border-b":""}  flex flex-wrap text-sm font-medium text-center text-gray-500  border-gray-200 dark:border-gray-700 dark:text-gray-400`}>
                    {props.tabSections.map((section,index)=>{

                        switch (props.tagType) {
                            case "ADD_BUTTON":
                                return(
                                    <>
                                        <div className="text-center ">
                                            <button
                                                className="bg-white flex items-center gap-3 text-black active:bg-slate-200 text-sm font-medium  px-6 py-4 rounded-full  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-fit ease-linear transition-all duration-150"
                                                type="submit"
                                                // onClick={()=>{props.setModalToggle(router.route)}}
                                            >
                                                <div>
                                                {section}
                                                </div>
                                            
                                                <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#F0BD66] w-4 h-4 font-block" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </>
                                )
                                break;
                        
                            default:
                                return(
                                    <>
                                        <li className="mr-2" onClick={()=>{props.setActiveTabSection(index)}}>
                                            <a href="#" aria-current="page" className={`inline-block p-4 ${props.activeTabSection == index ? "text-white bg-gray-900 active" : "text-gray-500 hover:text-gray-600 hover:bg-gray-100  " }  rounded-t-lg   `}>{section}</a>
                                        </li>
                                    </>
                                )
                                break;
                        }
                        
                    })}
                </ul>              
               
            </div>
        </nav>
        
        </>
    )
}

Tabs.Tab = Tab;

export { Tabs, Tab };
