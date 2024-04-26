import React from 'react';
import SingleAbout from './SingleAbout';

const About = () => {
    return (
        <div className='about__area'>
            <SingleAbout  text="about"sub="abt" desc=" Robin is a graduate of Dhaka College under National University, where he earned a B.Sc. in Mathematics."/>

            <SingleAbout  text="education"sub="edu" desc=" Robin is a graduate of Dhaka College under National University, where he earned a B.Sc. in Mathematics. Robin is a graduate of Dhaka College under National University, where he earned a B.Sc. in Mathematics."/>

            <SingleAbout  text="experience"sub="exp" desc=" Robin is a graduate of Dhaka College under National University, where he earned a B.Sc. in Mathematics."/>
            
            <SingleAbout  text="technology "sub="tech" desc=" Robin is a graduate of Dhaka College under National University, where he earned a B.Sc. in Mathematics."/>
            
        </div>
    );
};

export default About;