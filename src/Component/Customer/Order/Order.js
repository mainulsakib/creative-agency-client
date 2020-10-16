import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import FakeData from '../../FakeData';
import SideBar from '../SideBar/SideBar';

const Order = () => {
    const { value1, value2, value3 ,value4} = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = value1;
    const [course, setCourse] = value2;
    const [image, setImage] = value3;
    const [description,setDescription]=value4;
    const [price, setPrice] = useState()
    const { courseId } = useParams()
    let crsId = parseInt(courseId);
    const crs = FakeData.find(pd => pd.id === crsId);
    console.log(crs)
    setCourse(crs.name);
    setImage(crs.image);
    setDescription(crs.description);
    console.log(loggedInUser, course, image,description)
    const handleBlur = () => {

        setPrice(document.getElementById('price').value)

    }
    const handleSubmit = () => {
        const newCourse = { ...loggedInUser, course, price, image,description }
        fetch('https://still-taiga-09404.herokuapp.com/addCourse', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCourse)
        })
            .then(res => res.json())
            .then(info =>
                console.log(info))
    }
    const handleFileChange = () => {

    }
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <h1 >Order</h1>
                <div className="col-md-10 p-4 pr-5" style={{ right: 0, backgroundColor: "#F4FDFB" }}>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" defaultValue={loggedInUser.userName} className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" defaultValue={loggedInUser.email} name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="text" className="form-control" defaultValue={course} name="course" placeholder="Course" />
                        </div>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="text" className="form-control" name="price" id='price' placeholder="Price" required />
                        </div>
                        <div className="form-group">


                            <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;






