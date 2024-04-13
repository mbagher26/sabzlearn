import React from 'react'
import coursesData from '../../data/CoursesData'
import Course from '../course/Course'

function Courses() {
  return (
    <>
      {
        coursesData.map(course => (
          <Course key={course.id} {...course} />
        ))
      }
    </>
  )
}

export default Courses