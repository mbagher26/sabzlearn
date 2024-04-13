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
                                                  <Link to="/home" style={{color:'white'}}>Navbar</Link>
                                                  <Nav className="me-auto">
                                                            <Link to="/home" style={{marginLeft: '35px', color:'white'}}>Home</Link>
                                                            <Link to="/courses" style={{marginLeft: '35px', color:'white'}}>Courses</Link>
                                                            <Link to="/about" style={{marginLeft: '35px', color:'white'}}>About</Link>
                                                  </Nav>
                                        </Container>
                              </Navbar>
                    </>
          )
}

export default Header