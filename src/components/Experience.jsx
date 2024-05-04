import React from 'react';
import SingleAbout from './SingleAbout';
import cv from "./pdf/cvup.pdf"
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
            text="my experience"
            sub="xp"
            yes={true}
            link={cv}
            > 
           
               <ul>  
                 <li>🢅 I worked for 1 <sup>➕</sup> years as intern plus junior front end  DEVELOPER  at <span style={tagYeallow}>Hypertag Solution Ltd, Bangladesh </span></li>
                 <li>🢅 After that I worked as front end  SOFTWARE developer for 2 years ✌ at <span style={tagYeallow}>Creative IT Soft  LTD, BANGLADESH</span> </li>
                 <li>🢅 In between, I worked as a director of a coaching center for 3 years and worked for some local clients as a  WEB DESIGNER .</li>
                </ul>  
           
            </SingleAbout>
        </div>
    );
}; 
export default Experience;