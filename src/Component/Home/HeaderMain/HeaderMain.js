import React from 'react';
import image from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px  '}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
       <h3 style={{fontWeight:'700px',fontSize:'48px'}}>Let’s Grow Your <br/>Brand To The <br/>
Next Level</h3>
       <p style={{color:"000000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores sapiente amet exercitationem quia?</p>
       <button className="btn btn-primary btn-main">Set Appointment</button> 
            </div>
        <div className="col-md-6">
            <img src={image} alt="" className="img-fluid"/>
            </div>           
       </main>
    );
};

export default HeaderMain;