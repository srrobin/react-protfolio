import React from 'react';
import SingleAbout from './SingleAbout';
import cv from "./pdf/cvup.pdf"
import {educationSection} from "../utils/data"

const Education = () => {
    return (
        <div>
            <SingleAbout  
            text={educationSection.title}
            sub={educationSection.sub}
            yes={true}
            link={cv}
            > 
                <div>{educationSection.desc}
                </div>         
            </SingleAbout>
        </div>
    );
}; 

export default Education;