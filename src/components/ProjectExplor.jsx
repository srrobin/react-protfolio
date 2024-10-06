import React from 'react';
import ProjectDownTitle from './ProjectDownTitle';
import ProjectUpTitle from './ProjectUpTitle';
import { BsArrowUpRightCircle } from "react-icons/bs";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {demoSection} from '../utils/data';
import { motion } from "framer-motion";



const ProjectExplor = () => {

    return (
        <> 
        <div className='demo__projects__area'> 
        <motion.div 
                initial={{ y:-100, opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{ 
                    delay:.6,
                    y:{type:"spring",stiffness:60},
                    ease:"easeIn",
                    opacity:{duration: .5 },
                    duration: 1 
                    }}
        className='demo__title__area'
        >
             demo work
            <span>explore</span>
        </motion.div>
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
                    <Link to="/robin/real-life-experience"  target="_blank">
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