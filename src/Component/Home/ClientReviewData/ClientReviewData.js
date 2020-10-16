import React, { useEffect, useState } from 'react';
import ClientReview from '../ClientReview/ClientReview';

const clientReview=[
    {
    name:'Nash Patrik',
    post:'CEO, Manpol',
    image:'https://i.ibb.co/5khjnN9/customer-1.png'
    },
    {
        name:'Miriam Barron',
        post:'CEO, Manpol',
        image:'https://i.ibb.co/K6HyP6H/customer-2.png'
        },
        {
            name:'Bria Malone',
            post:'CEO, Manpol',
            image:'https://i.ibb.co/1Gyxfhc/customer-3.png'
            }
    ]


const ClientReviewData = () => {
    const [review, setReview] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/comments')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h1 className='text-center mt-5'>Clients <span style={{color: '#7AB259'}}> Feedback</span></h1>
             {
                review.map( clientReview=> <ClientReview review={clientReview}></ClientReview>)
            }
        </div>
    );
};

export default ClientReviewData;