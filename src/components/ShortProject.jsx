import React from 'react';
import ProjectUpTitle from './ProjectUpTitle';
import ProjectDownTitle from './ProjectDownTitle';
import LinkRoundLinkBtn from './srbutton/LinkRoundLinkBtn';
import {staticDemo} from "../utils/data"
import { motion } from "framer-motion";

const ShortProject = () => {
    return (
        <div className='demo__project'> 
            <motion.span 
                initial={{ y:-50, opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{ 
                    delay:.6,
                    y:{type:"spring",stiffness:60},
                    ease:"easeIn",
                    opacity:{duration: .5 },
                    duration: 1 
                    }}
            >
                demo project
            </motion.span>
            <div className='project__title__top'>
                Explor All <LinkRoundLinkBtn link="/robin/demo-work"/>
            </div>
            <div className='short__project'>
                <ProjectDownTitle staticDemo={staticDemo[0]}/>
                <ProjectUpTitle  staticDemo={staticDemo[1]}/>
            </div>
        </div>
    );
};

export default ShortProject;