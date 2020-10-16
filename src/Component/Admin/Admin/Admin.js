    import React, { useEffect } from 'react';
import { useState } from 'react';
import AdminAddService from '../AdminAddServices/AdminAddService';
import AdminSidebar from '../AdminSidebar/AdminSIdebar';
    
    const Admin = () => {
        const [allCourses,setAllCourses]=useState([])
        useEffect(() =>{
            fetch ('https://still-taiga-09404.herokuapp.com/allCourses')
            .then(res=>res.json())
            .then(data=>setAllCourses(data))
        },[])
        console.log(allCourses)
        return (
            <div className='row'>
               <div className="col-md-2">
               <AdminSidebar></AdminSidebar>
               </div>
               <div className="col-md-10">
      <h1>Service list</h1>           
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Course</th>
      <th scope="col">Course Description</th>
      <th scope="col">Course Status</th>
    </tr>
  </thead>
  
{
    allCourses.map(course =>  <tbody>
        <tr>
          <th scope="row">1</th>
    <td>{course.userName}</td>
    <td>{course.email}</td>
          <td>{course.course}</td>
    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aliquam!</td>
    <td><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Running</a>
    <a class="dropdown-item" href="#">Pending</a>
    <a class="dropdown-item" href="#">Done</a>
  </div>
</div></td>
        </tr>
       
      </tbody>
    )
}
 </table>
             </div>
            </div>
        );
    };
    
    export default Admin;



    
 