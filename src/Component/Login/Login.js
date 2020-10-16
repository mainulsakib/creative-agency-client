import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import {UserContext} from '../../App'
import googleLogo from '../../images/google.png'

const Login = () => {
    const {value1,value2,value3} =useContext(UserContext)
    const [loggedInUser,setLoggedInUser]=value1;
    const history=useHistory();
    const location =useLocation(); 
    let { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length===0){
firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider).then(function(result) {
    const {displayName,email }    = result.user;
    const signedInUser={userName:displayName,email:email}
           setLoggedInUser(signedInUser);
           history.replace(from)
    
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
           console.log(errorCode,errorMessage)
          });
    }
    return (
      <div className='text-center'>
          <div>
              <img  className='m-5' style={{height:'80px',width:'158px'}} src={logo} alt=""/>
          </div>
          <div className=' p-5 text-center' style={{border:'1px solid black' ,width:" 320px",margin:"0 auto",height:" 257px"}}>
              <h4><strong>Login with</strong></h4>
              <div onClick={handleGoogleIn} style={{border: '1px solid black'}}className='rounded-pill d-flex flex-row m-1 p-1'>
                  <img  className='rounded-circle m-1' style={{height:'15px',width:'15px'}} src={googleLogo} alt=""/>
                <p className="text-center" >Sign in WIth google</p>
              </div>
              <p><small>Don't have account ?<span  onClick={handleGoogleIn} style={{color: 'blue'}}> Create an account </span></small></p>
          </div>
      </div>
          );

};

export default Login;