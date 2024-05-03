import React from 'react';
import ProjectDownTitle from './ProjectDownTitle';
import ProjectUpTitle from './ProjectUpTitle';
import { BsArrowUpRightCircle } from "react-icons/bs";
import Footer from './Footer';
import { Link } from 'react-router-dom';




const ProjectExplor = () => {
    return (
        <div className='demo__projects__area'> 

        <div className='demo__title__area'>
             demo work
            <span>explore</span>
        </div>
            <div className='demo__projects'>
                <ProjectDownTitle order="1"/>
                <ProjectUpTitle  order="2"/>
            </div>
            <div className='demo__projects'>
                <ProjectDownTitle order="2"/>
                <ProjectUpTitle order="1"/>
            </div>
            <div className='demo__projects'>
                <ProjectDownTitle  order="1"/>
                <ProjectUpTitle  order="2"/>
            </div>


            <div className='optional__section'>
                <div className='optional__title'>
                    <span className='title__link'> 
                    let's move 
                    <Link to="/robin/experienced">
                        <BsArrowUpRightCircle  className='optional__link'/> 
                    </Link>
                    </span>
                    <span>I visit many rural areas of Bangladesh, live their lives and write about their thoughts and my thoughts in the 21st century</span>
                    </div>
                <div className='optional__jump'> 
                  photography and ideas 
                </div>
                {/* <LinkRoundLinkBtn /> */}
            </div>
            <Footer />
        </div>
    );
};

export default ProjectExplor;