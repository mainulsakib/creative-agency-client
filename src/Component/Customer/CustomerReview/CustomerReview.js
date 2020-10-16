import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const CustomerReview = () => {
    const [info, setInfo] = useState({});
    const handleBlur = e=> {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
         console.log(info)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData()
      
        
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('review',info.review);
        console.log(formData)

        fetch('http://localhost:5000/addComment', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="row">
            <div className="col-md-2">
               <SideBar></SideBar>
            </div>
            <div className="col-md-9">
            <div >
           <h1 >Review</h1>
        <div className=" p-4 pr-5 h-100" style={{  right: 0, backgroundColor: "#F4FDFB", height:"1000px"}}>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="text" className="form-control" name="review" placeholder="review" />
                        </div>
                        <button  type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
            </div>
        </div>
    );
};

export default CustomerReview;