import React from 'react';
import ProjectUpTitle from './ProjectUpTitle';
import ProjectDownTitle from './ProjectDownTitle';
import LinkRoundLinkBtn from './srbutton/LinkRoundLinkBtn';

const ShortProject = () => {
    return (
        <div className='demo__project'> 
            <span>demo project</span>
            <div className='project__title__top'>
                Explor All <LinkRoundLinkBtn link="/robin/demo-work"/>
            </div>
            <div className='short__project'>
                <ProjectDownTitle />
                <ProjectUpTitle />
            </div>
        </div>
    );
};

export default ShortProject;