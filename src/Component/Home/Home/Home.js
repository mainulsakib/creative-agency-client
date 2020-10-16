import React from 'react';
import Brand from '../Brand/Brand';
import ClientReviewData from '../ClientReviewData/ClientReviewData';
import CourseInfo from '../CourseInfo/CourseInfo';
import Header from '../Header/Header';
import HomeFooter from '../HomeFooter/HomeFooter';

import WorkInfo from '../WorkInfo/WorkInfo';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brand></Brand>
            <CourseInfo></CourseInfo>
            <WorkInfo ></WorkInfo>
           <ClientReviewData></ClientReviewData>
            <HomeFooter></HomeFooter>
        </div>
    );
};

export default Home;