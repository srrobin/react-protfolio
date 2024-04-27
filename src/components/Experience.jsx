import React from 'react';
import SingleAbout from './SingleAbout';

const Experience = () => {
    return (
        <div>
            <SingleAbout  text="my experience "sub="exp" link={false}> 
           
               <ul>  
                 <li>web development</li>
                 <li>software development</li>
                 <li>web design</li>
                </ul>  
           
            </SingleAbout>
        </div>
    );
}; 
export default Experience;