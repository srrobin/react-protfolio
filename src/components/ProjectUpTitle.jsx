import React from 'react';
import projectImage from "../assets/pro2.jpg"
import Srbutton from './srbutton/Srbutton';
import RoundLinkBtn from './srbutton/RoundLinkBtn';

const ProjectUpTitle = () => {
    return (
        <div className='project__uptitle'>

           <div className='project__about'>
             <div className='project__title'>petclinic</div>
             <div className='project__desc'>The react PetClinic is a sample application designed to show how the reactstack </div>
             <Srbutton textTitle="petclinic gitgub link"/>
           </div>
           <div className='project__image'>
             <img src={projectImage} alt=''/>
             <RoundLinkBtn />
           </div>

        </div>
    );
};

export default ProjectUpTitle;