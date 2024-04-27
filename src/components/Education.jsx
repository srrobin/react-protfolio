import React from 'react';
import SingleAbout from './SingleAbout';

const Education = () => {
    return (
        <div>
            <SingleAbout  text="my education "sub="edu" link={false}> 
           
               <ul>  
                 <li>web development</li>
                 <li>software development</li>
                 <li>web design</li>
                </ul>  
           
            </SingleAbout>
        </div>
    );
}; 

export default Education;