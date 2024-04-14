import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgSvg from './../../svg/hero-light.svg'
import './../../styles/home.css'

function Home() {
  return (
    <Container>
      <Row className='row-container-home'>
        <Col md={6}><img src={imgSvg} alt='Home' style={{width: '90%'}}/></Col>
        <Col md={6}>
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, optio quaerat aliquam expedita maxime vel eos perferendis quibusdam neque! Provident voluptates quidem mollitia, tempore iste eveniet perferendis placeat voluptatem blanditiis.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Home