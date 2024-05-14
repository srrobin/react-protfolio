import React from 'react';
import SingleAbout from './SingleAbout';
import cv from "./pdf/cvf.pdf"
import {experienceSection} from "../utils/data"
const tagYeallow = {
    color:"#d48806", 
    background:"#fffbe6", 
    border:".1rem solid #ffe58f",
    padding:"0px 10px",
    margin: "3px 0px",
    borderRadius:"6px"
}
const Experience = () => {
    return (
        <div>
            <SingleAbout  
            text={experienceSection.title}
            sub={experienceSection.sub}
            yes={true}
            link={cv}
            > 
           
               <ul>  
               {experienceSection?.desc.map((item)=>(
                 <li>{item.inst_desc}   <span style={item.inst_name ? tagYeallow : null}>
                 {item?.inst_name}
               </span></li>
               ))}
                </ul>  
           
            </SingleAbout>
        </div>
    );
}; 
export default Experience;