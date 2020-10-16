import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                
                <img style={{ height:'60px',width:'150px'}} src={logo} alt="" class=" ml-4"/>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto p-3">
                        <li class="nav-item active">
                        <Link style={{textDecoration:'none',color:'black',margin:'10px'}}to ='home'>Home</Link>
                        </li>
                        <li class="nav-item active">
                              <Link  style={{textDecoration:'none',color:'black',margin:'10px'}} to ='ourPortfolio'>Our Portfolio</Link>
                        </li>
                        <li class="nav-item active ">
                        <Link  style={{textDecoration:'none',color:'black',margin:'10px'}} to="ourTeam">Our Team</Link>
                        </li>
                        <li class="nav-item active">
                            <Link  style={{textDecoration:'none',color:'black',margin:'10px'}} to="ContactUs">Contact Us</Link>
                        </li>
                    
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
     
                        <button style={{width: "134px",height:" 45px",backgroundColor:"#111430",borderRadius: "5px", color:"white"}} class="btn  my-2 my-sm-0" type="submit"><Link to="login">Login</Link></button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;