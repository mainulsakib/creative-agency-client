import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/carousel-1.png'
import img2 from '../../../images/carousel-2.png'
import img3 from '../../../images/carousel-3.png'
import './WorkInfo.css'

const WorkInfo = () => {
    return (
        <div style={{ backgroundColor: '#111430', color: 'white' }}>
           
            <div style={{ color: 'white' }}>
                <div >
                    <h1 className="text-center m-5">Here are some of <span style={{ color: '#7AB259' }}> our works</span></h1>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 float-left h-50"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>

                        <img
                            className="d-block w-50 h-50"
                            src={img2}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 h-50"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            </div>
    );
};

export default WorkInfo;