import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './../../styles/course.css'

function Course(props) {

  return (
    <div className='course-container'>
      <Link to={`/course/${props.id}`}>
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src={props.img} style={{ width: '100%', height: '150px' }} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.price}
            </Card.Text>
            <Link to={`/course/${props.id}`}>Go somewhere</Link>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )
}

export default Course