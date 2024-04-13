import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
          return (
                    <>
                              <Navbar bg="primary" data-bs-theme="dark">
                                        <Container>
                                                  <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                                                  <Nav className="me-auto">
                                                            <Link to="/home" style={{marginLeft: '35px', color:'white'}}>Home</Link>
                                                            <Link to="/courses" style={{marginLeft: '35px', color:'white'}}>sourses</Link>
                                                            <Link to="/about" style={{marginLeft: '35px', color:'white'}}>about</Link>
                                                  </Nav>
                                        </Container>
                              </Navbar>
                    </>
          )
}

export default Header