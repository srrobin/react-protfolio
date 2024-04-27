import React from 'react';
import SingleAbout from './SingleAbout';
import Technology from './Technology';
import ToolBox from './ToolBox';
import Experience from './Experience';
import Education from './Education';

const About = () => {
    return (
        <div className='about__area'>

            <Education />
            <Experience/>
            <Technology />
            <ToolBox />
            
        </div>
    );
};

export default About;