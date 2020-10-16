import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSIdebar';


const AdminAddService = () => {
    const handleBlur = () => {

    }
    const handleSubmit = () => {

    }
    const handleFileChange = () => {

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
                                <label htmlFor="exampleInputEmail1">Service Title</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Icon</label>
                                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                                </div>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Description</label>
                                <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminAddService;