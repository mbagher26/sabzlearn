import React from 'react'
import coursesData from '../../data/CoursesData'
import Course from '../course/Course'
import './../../styles/Courses.css'

function Courses() {
  return (
    <div className='courses-container'>
      {
        coursesData.map(course => (
          <Course key={course.id} {...course} />
        ))
      }
    </div>
  )
}

export default Courses