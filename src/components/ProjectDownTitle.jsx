import React from 'react';
import Srbutton from './srbutton/Srbutton';
import RoundLinkBtn from './srbutton/RoundLinkBtn';
import { motion } from "framer-motion";

const ProjectDownTitle = ({staticDemo}) => {
    console.log("🚀 ~ ProjectDownTitle ~ staticDemo:", staticDemo)
    return (
        <motion.div 
        initial={{ y:100, opacity: 0 }}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ 
            delay:.10,
            y:{type:"spring",stiffness:60},
            ease:"easeIn",
            opacity:{duration: 1 },
            duration: 1 
            }}
        className='project__downtitle' 
        style={{order:staticDemo.order}}
        >
           <div className='project__image'>
             <img src={staticDemo.project_image} alt=''/>
             <RoundLinkBtn link={staticDemo.live_demo_link} />
           </div>
           <div className='project__about'>
             <div className='project__title'>{staticDemo.project_title}</div>
             <div className='project__desc'>{staticDemo.project_desc}</div>
             <div className='project__use'>
             <ul>
                {staticDemo.tech.map((item) =>(
                   <li>{item}</li>
                ))}
              </ul>
             </div>
             <Srbutton textTitle=" github link" link={staticDemo.github_link}/>
           </div>

        </motion.div>
    );
};

export default ProjectDownTitle;