import React from 'react'
import { useParams } from 'react-router-dom'
import coursesData from '../../data/CoursesData'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Maincourse() {
          let Params = useParams()
          let Course = coursesData.find(course => course.id === Params.courseID)
          return (
                    <Container>
                              <Row>
                                        <Col md={6}><img src={Course.img} alt={Course.title} style={{ width: '100%' }} /></Col>
                                        <Col md={6}>
                                                  <h2 style={{textAlign: 'end'}}>{Course.title}</h2>
                                                  <p style={{ textAlign:'right'}}>{Course.description}</p>
                                        </Col>
                              </Row>
                    </Container>
          )
}

export default Maincourse