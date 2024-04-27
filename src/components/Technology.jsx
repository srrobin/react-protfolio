import React from 'react';
import SingleAbout from './SingleAbout';

const Technology = () => {
    return (
        <div>
            <SingleAbout  text="my expertises "sub="exp" link={false}> 
           
               <ul>  
                 <li>web development</li>
                 <li>software development</li>
                 <li>web design</li>
                </ul>  
           
            </SingleAbout>
        </div>
    );
}; 

export default Technology;