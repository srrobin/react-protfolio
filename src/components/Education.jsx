import React from 'react';
import SingleAbout from './SingleAbout';
import cv from "./pdf/cv1.pdf"

const Education = () => {
    return (
        <div>
            <SingleAbout  
            text="my education"
            sub="edu" 
            yes={true}
            link={cv}
            > 
                <div>
                I am a graduate of✏️ Dhaka College at National University, where I earned  B.Sc. in 🍀 Mathematics.
                </div>         
            </SingleAbout>
        </div>
    );
}; 

export default Education;