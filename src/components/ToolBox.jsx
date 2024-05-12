import React from 'react';
import SingleAbout from './SingleAbout';
import learning from '../assets/learning2.gif';
import {toolSection} from "../utils/data"
const tagGreen = {
    background: "#ADAD9C", 
    border:".1rem solid #ADAD9C",
    padding:"0px 10px",
    borderRadius:"6px"
}
const tagYeallow = {
    color:"#d48806", 
    background:"#ebe5c4", 
    border:".1rem solid #d48806",
    padding:"0px 10px",
    borderRadius:"6px"
}
const tagRed = {
    color: "#8b0000", 
    background: "#ADAD9C", 
    border:".1rem solid #ADAD9C",
    padding:"0px 10px",
    borderRadius:"6px",
    display:"flex",
    alignItems:"center"
}
const area={
    display : "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap:"5px",
    flexWrap:"wrap",
    padding: "0 20px",
    marginBottom: "5px"
   
    }
const ToolBox = () => {
    return (
        <div>
            <SingleAbout  
            text={toolSection.title}
            sub={toolSection.sub}
            link={false}
            > 
              <div style={area}>
              {toolSection.full_expart.map((item, index) =>( 
                <span style={tagGreen} key={index}>{item}</span>
              ))}
              </div> 

              <div style={area}>
              {toolSection.mid_expart.map((item, index) =>( 
                <span style={tagYeallow} key={index}>{item}</span>
              ))}
              </div>
              <div style={area}>
              {toolSection.low_expart.map((item, index) =>( 
                  <span style={tagRed} key={index}><img src={learning} alt='' style={{width:"30px"}}/>{item}</span>
              ))}
              </div>
            </SingleAbout>
        </div>
    );
}; 
export default ToolBox;
