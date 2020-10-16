import React from 'react';
import logo from '../../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faTaxi,faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';



const SideBar = () => {
    const {courseId}=useParams();
   
 
    return (
        <div>
        <Link to='/home'><img  className ='m-2'style={{width: "150px",height: "47px"}} src={logo} alt=""/></Link>
        <Link  style={{textDecoration:'none',color:'black'}}  to={`/customerOrder/${courseId}`} className="d-flex  flex-row m-2">
        <FontAwesomeIcon icon={faShoppingCart} />
        <p>Order</p>
            </Link>  
            <Link style={{textDecoration:'none',color:'black'}}  to='/customerService' className="d-flex  flex-row m-2 ">
        <FontAwesomeIcon icon={faTaxi} />
        <p>Service List </p>
            </Link>   
            <Link style={{textDecoration:'none',color:'black'}}  to='/customerReview' className="d-flex  flex-row  m-2">
        <FontAwesomeIcon icon={faCommentAlt} />
        <p>Review</p> 
            </Link>    
        </div>
    );
};

export default SideBar;