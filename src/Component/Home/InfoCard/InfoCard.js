import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './infoCard.css'

const InfoCard = ({info}) => {
    const {value1,value2,value3,value4}=useContext(UserContext);
    const [loggedInUser,setLoggedInUser]=value1;
    const [admin,setAdmin]=useState(false)
  useEffect(() => {
      fetch("https://still-taiga-09404.herokuapp.com/admin?email="+loggedInUser.email)
      .then(res=>res.json())
      .then(data=>setAdmin(data))
  },[]) 
    console.log(admin)
    return (
    <div>
       
           <Link to={`/customerOrder/${info.id}`}  style={{textDecoration:'none',color:'black'}}  className='col-md-4 card  info-card  text-center '>
        <div className="d-flex justify-content-center info-container  mt-5 ">
            <div>
                <img className='m-2' src={info.image} alt=""/>
         
            <h6>  <strong>{info.name}</strong></h6>
                <small>{info.description}</small>
            </div>
        </div>
   
       </Link>
    </div>
    );
};

export default InfoCard;