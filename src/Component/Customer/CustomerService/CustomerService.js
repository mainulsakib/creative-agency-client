import { faBox } from '@fortawesome/free-solid-svg-icons';
import { database } from 'firebase';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const CustomerService = () => {
  const [courses,setCourses]=useState([])
  const {value1}=useContext(UserContext)
  const [loggedInUser,setLoggedInUser]=value1;
  
  useEffect(() => {
    fetch('https://still-taiga-09404.herokuapp.com/courses?email='+loggedInUser.email)
    .then(res=>res.json())
  .then(data=>{setCourses(data)})
  },[])
  console.log(courses)
    return (
        <div className='row'>
          <div className="col-md-2">
                <SideBar></SideBar>
          </div>
          <div className="col-md-9">
         {
           courses.map(course=><div style={{width:" 415px", height: "254px",borderRadius: "20px",float: "left"}} className='d-flex flex-column border border-success m-3 p-1'>

            <div className='d-flex justify-content-between' >
              <img  className='mr-4 mb-4' style={{height:"55px",width:"65px"}} src={course.image} alt=""/>
              <p className='text-right'>Pending</p>
            </div>

             <h5>{course.course}</h5>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit ab animi eum itaque optio autem, ipsum, repellat dolor consequuntur, tempora quis dolorem assumenda soluta doloribus. Officiis beatae molestias neque!</p>

           </div>)
         }

          </div>
        </div>
    );
};

export default CustomerService;