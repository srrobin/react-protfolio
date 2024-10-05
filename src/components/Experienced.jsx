import React from 'react';
import { ideasSection } from "../utils/data"
import TypeOneEx from './TypeOneEx';
import TypeTwoEx from './TypeTwoEx';
const Experienced = () => {
    return (
        <div className='optional__area'>
           {ideasSection?.map((item) => (
              <div key={item.id}>
                {item.type === 1 ? 
                 <TypeOneEx item={item}/>
                 :
                 <TypeTwoEx  item={item} />
                }
              </div>
           ))}
           
        </div>
    );
};

export default Experienced;