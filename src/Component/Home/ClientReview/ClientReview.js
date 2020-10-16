import React from 'react';

const ClientReview = ({review}) => {
    return (
        <div style={{float: 'left'}} className='col-md-3  info-card text-center m-5 p-5  w-75 h-50'>
        <div>
            <div className='d-flex justify-content  align-items-center'>
                <img className='m-2' src={review.image} alt=""/>
         
            <div>
            <h6>  <strong>{review.name}</strong></h6>
    <h6>{review.post}</h6>
            </div>
            
                </div> 
                <div>          
           <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur reprehenderit molestias, </small>
            </div>
        </div>
    </div>
    );
};

export default ClientReview;