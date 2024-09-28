import React from 'react';

function CreateProject(props) {
    return (
        <div className='bg-black w-52 h-52 '>
            <div onClick={()=>{props._as.setModalToggle('/admin/alumniManagement')}}> model toggle</div>
        </div>
    );
}

export default CreateProject;