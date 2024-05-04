import React from 'react';
import ProjectDownTitle from './ProjectDownTitle';
import ProjectUpTitle from './ProjectUpTitle';
import { BsArrowUpRightCircle } from "react-icons/bs";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {demoSection} from '../utils/data';




const ProjectExplor = () => {

    return (
        <> 
        <div className='demo__projects__area'> 
        <div className='demo__title__area'>
             demo work
            <span>explore</span>
        </div>
        <div className='demo__projects'>
        {demoSection.map((item) => ( 
            <div className='' style={{order:item.order,marginBottom: "50px"}} key={item.id}>
                {item.type === 1 ? (
                    <ProjectDownTitle staticDemo={item} />
                ) : (
                    <ProjectUpTitle staticDemo={item} />
                )}
            </div>
        ))}
        </div>
        </div>
        <div className='optional__section'>
                <div className='optional__title'>
                    <span className='title__link'> 
                    let's move 
                    <Link to="/robin/real-life-experience">
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
        </>
    );
};

export default ProjectExplor;