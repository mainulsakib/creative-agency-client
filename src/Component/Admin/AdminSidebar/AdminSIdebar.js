import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faTaxi ,faPlus,faShoppingCart,faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../images/logos/logo.png'
import { Link, useParams  } from 'react-router-dom';


const AdminSidebar = () => {
    const {courseId}=useParams();
   
    return (
        <div>
             <div>
             <Link to='/home'><img  className ='m-2'style={{width: "150px",height: "47px"}} src={logo} alt=""/></Link>
        <Link style={{textDecoration:'none',color:'black'}} to='/adminServiceList' className="d-flex  flex-row m-2 ">
        <FontAwesomeIcon icon={faTaxi} />
        <p>Service List </p>
            </Link>  
           
<Link style={{textDecoration:'none',color:'black'}}  className="d-flex  flex-row m-2 " to='/adminAddService'>        <FontAwesomeIcon icon={faPlus} />
        <p>Add Service</p></Link>
             
            <Link style={{textDecoration:'none',color:'black'}}  to='/adminNew' className="d-flex  flex-row  m-2">
        <FontAwesomeIcon icon={faUserPlus} />
        <p>Make Admin</p>
            </Link>  
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
        </div>
    );
};

export default AdminSidebar;