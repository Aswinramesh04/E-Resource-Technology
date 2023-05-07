import React from 'react'
import styled from 'styled-components';
const CourseList = () => {
  return (
    <CourseListWrapper>
        <div className ='container'>
            <div className ='courses-list-top'>
                <h2>Top Trending Courses</h2>
                <p>Learn Today Lead Tomorrow</p>
            </div>
        </div>

    </CourseListWrapper>
  )
}

const CourseListWrapper = styled.div`
`;

export default CourseList