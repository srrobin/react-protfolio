import React from 'react';
import ProjectUpTitle from './ProjectUpTitle';
import ProjectDownTitle from './ProjectDownTitle';
import RoundLinkBtn from './srbutton/RoundLinkBtn';

const ShortProject = () => {
    return (
        <div className='short__project'>
            <ProjectDownTitle />
            <RoundLinkBtn roundText="All projects"/>
            <ProjectUpTitle />
        </div>
    );
};

export default ShortProject;