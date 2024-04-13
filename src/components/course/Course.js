import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Course(props) {

  return (
    <Link to={`/course/${props.id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} style={{width:'100%', height: '150px'}} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.price}
          </Card.Text>
          <Link to={`/course/${props.id}`}>Go somewhere</Link>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Course