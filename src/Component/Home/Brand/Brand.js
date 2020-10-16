import React from 'react';
import slack from '.././../../images/logos/slack.png'
import netflix from '.././../../images/logos/netflix.png'
import google from '../../../images/logos/google.png'
import airbnb from '../../../images/logos/airbnb.png'
import uber from '.././../../images/logos/uber.png'
import './Brand.css'


const Brand = () => {
    return (
        <div className='brand'>
            
            <img src={slack} alt=""/>
            <img src={google} alt=""/>
            <img src={uber} alt=""/>
            <img src={netflix} alt=""/>
            <img src={airbnb} alt=""/>
        </div>
    );
};

export default Brand;