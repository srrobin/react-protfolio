import React from 'react';
import SingleAbout from './SingleAbout';

const AboutMe = () => {
    return (
        <div>
            <SingleAbout  text="about me "sub="abt" link={false}> 
           
                <div>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam eius nulla at laudantium perferendis quasi recusandae a officia. Voluptas, vitae.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam eius nulla at laudantium perferendis quasi recusandae a officia. Voluptas, vitae.
                    </p> 
                </div>  
           
            </SingleAbout>
        </div>
    );
};
export default AboutMe;