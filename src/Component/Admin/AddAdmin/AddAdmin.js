import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSIdebar';

const AddAdmin = () => {
    const [newAdmin, setNewAdmin] = useState({});
    const handleBlur = e=> {   
        const LatestAdmin = { ...newAdmin };
    newAdmin[e.target.name] = e.target.value;
    setNewAdmin(LatestAdmin);
     console.log(newAdmin)

    }
    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('email', newAdmin.email);
     
        console.log(formData)

        fetch('http://localhost:5000/addAdmin', {
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
        <div className='row'>
            <div className="col-md-2">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-8">
                <div >
                    <h1 >Add Service</h1>
                    <div className=" p-4 pr-5 h-100" style={{ right: 0, backgroundColor: "#F4FDFB", height: "1000px" }}>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Add Admin</label>
                                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="
                                    Add Admin" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddAdmin;