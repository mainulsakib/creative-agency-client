import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import FakeData from '../../FakeData'


const CourseInfo = () => {
     const courseInfo=FakeData
    return (
        <div>
            {
                courseInfo.map(course =><InfoCard info={course}></InfoCard>  )
            }
        </div>
    );
};

export default CourseInfo;