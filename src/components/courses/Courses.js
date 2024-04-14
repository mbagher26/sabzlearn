import React from 'react'
import coursesData from '../../data/CoursesData'
import Course from '../course/Course'
import './../../styles/Courses.css'
import { Col, Row } from 'react-bootstrap';


function Courses() {
  return (
    <div className='courses-container'>
      <Row>
        {
          coursesData.map(course => (
            <Col sm={6} md={4}>
              <Course key={course.id} {...course} />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Courses