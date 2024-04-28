import React from 'react';
import SingleAbout from './SingleAbout';

const Education = () => {
    return (
        <div>
            <SingleAbout  text="my education "sub="edu" yes={true}> 
                <div>
                I am a graduate of✏️ Dhaka College at National University, where I earned  B.Sc. in 🍀 Mathematics.
                </div>         
            </SingleAbout>
        </div>
    );
}; 

export default Education;