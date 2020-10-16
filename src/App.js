import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import './App.css';
import AddAdmin from './Component/Admin/AddAdmin/AddAdmin';
import Admin from './Component/Admin/Admin/Admin';
import AdminAddService from './Component/Admin/AdminAddServices/AdminAddService';
import Customer from './Component/Customer/Customer/Customer';
import CustomerReview from './Component/Customer/CustomerReview/CustomerReview';
import CustomerService from './Component/Customer/CustomerService/CustomerService';
import Order from './Component/Customer/Order/Order';
import Home from './Component/Home/Home/Home';  
import Login from './Component/Login/Login'
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext=createContext()

function App() {
  const [images,setImages]=useState({})
  const [loggedInUser,setLoggedInUser]=useState({})
  const [course,setCourse]=useState({})
  const [description,setDescription]=useState({})
  return (
    <UserContext.Provider value={{value1:[loggedInUser,setLoggedInUser],value2:[course,setCourse],value3:[images,setImages],value4:[description,setDescription]}}>
    <Router>
      <Switch>
        <Route  exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>   
        </Route>
        <PrivateRoute path="/customerOrder/:courseId">
          <Order></Order>
        </PrivateRoute>
        <Route path="/CustomerService">
          <CustomerService></CustomerService>
        </Route>
        <Route path="/customerReview">
          <CustomerReview></CustomerReview>
        </Route>
        <Route path="/adminServiceList">
          <Admin></Admin>
        </Route>
        <Route path="/adminAddService">
          <AdminAddService></AdminAddService>
        </Route>
        <Route path="/adminNew">
          <AddAdmin></AddAdmin>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
