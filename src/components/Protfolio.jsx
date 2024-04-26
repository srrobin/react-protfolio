import React from 'react';
import protImage from "../assets/r.jpg"
import Artistic from './Artistic';
import About from './About';
import ShortProject from './ShortProject';
import QuoteArea from './QuoteArea';
import Footer from './Footer';

const Protfolio = () => {
    return (
        <> 
        <div className='prot__area'>
           <div className='top__area'>
            <div className='prot__gretting'> Hey you, I'm</div>
                <div className='prot__name'>Sayam Rahman Robin</div>
                <div className='prot__image'>
                    <img src={protImage} alt=''/>
            </div>
           </div>
        </div>

        <Artistic />

        <About />
        <ShortProject />
        <QuoteArea />
        <Footer />

        </>
    );
};

export default Protfolio;