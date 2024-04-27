import React from 'react';
import ProjectUpTitle from './ProjectUpTitle';
import ProjectDownTitle from './ProjectDownTitle';

const ShortProject = () => {
    return (
        <div className='short__project'>
            <ProjectDownTitle />
            <ProjectUpTitle />
        </div>
    );
};

export default ShortProject;