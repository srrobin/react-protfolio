import React from 'react';
import SingleAbout from './SingleAbout';

const ToolBox = () => {
    return (
        <div>
            <SingleAbout  text="my degital tool box "sub="tool" link={false}> 
           
               <ul>  
                 <li>web development</li>
                 <li>software development</li>
                 <li>web design</li>
                </ul>  
           
            </SingleAbout>
        </div>
    );
}; 
export default ToolBox;