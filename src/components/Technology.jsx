import React from 'react';
import SingleAbout from './SingleAbout';
import {expertisesSection} from "../utils/data"

const Technology = () => {
    return (
        <div>
            <SingleAbout  
            text={expertisesSection.title}
            sub={expertisesSection.sub}
            link={false}
            > 
               <ul>  
               {expertisesSection?.full_expart?.map((item)=>( 

                 <li>{item.title}</li>
               ))}
                </ul>  
           
            </SingleAbout>
        </div>
    );
}; 

export default Technology;