import React from 'react';
import SingleAbout from './SingleAbout';
import learning from '../assets/learning2.gif';
const tagGreen = {
    // color: "#ADAD9C", 
    background: "#ADAD9C", 
    border:".1rem solid #ADAD9C",
    padding:"0px 10px",
    margin: "3px 0px",
    borderRadius:"6px"
}
const tagYeallow = {
    // color:"#e1e708", 
    color:"#d48806", 
    // background:"#ADAD9C", 
    // background:"#fffbe6", 
    background:"#ebe5c4", 
    // border:".1rem solid #ADAD9C",
    border:".1rem solid #d48806",
    padding:"0px 10px",
    margin: "3px 0px",
    borderRadius:"6px"
}
const tagRed = {
    // color: "#a3202a", 
    color: "#8b0000", 
    background: "#ADAD9C", 
    border:".1rem solid #ADAD9C",
    padding:"0px 10px",
    margin: "3px 0px",
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
    padding: "0 20px"
   
    }
const ToolBox = () => {
    return (
        <div>
            <SingleAbout  text="my degital tool box "sub="tool" link={false}> 
              <div style={area}>
                <span style={tagGreen}>html</span>
                <span style={tagGreen}>css</span>
                <span style={tagGreen}>javascript</span>
                <span style={tagGreen}>reactjs</span>
                <span style={tagGreen}>sass</span>
              </div> 
              <div style={area}>
                <span style={tagYeallow}>redux</span>
                <span style={tagYeallow}>nextjs</span>
                <span style={tagYeallow}>tailwind css</span>
              </div>
              <div style={area}>
                <span style={tagRed}><img src={learning} alt='' style={{width:"30px"}}/> django</span>
                <span style={tagRed}><img src={learning} alt='' style={{width:"30px"}}/>drf</span>
                <span style={tagRed}><img src={learning} alt='' style={{width:"30px"}}/>MongoDBg</span>
              </div>
            </SingleAbout>
        </div>
    );
}; 
export default ToolBox;
