import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({url,children}) => {
    return (
        <div style={{ padding: '10px' }}>
             <Link to={url}>
                <button className='link__btn'>
                    {children}
                </button>
             </Link>
        </div>
    );
};

export default LinkButton;