import React from 'react';
import SingleAbout from './SingleAbout';
import {aboutSection} from "../utils/data"

const AboutMe = () => {
    return (
        <div>
            <SingleAbout  text={aboutSection.title} sub={aboutSection.sub}  link={false}> 
           
                    {aboutSection.desc}
           
            </SingleAbout>
        </div>
    );
};
export default AboutMe;