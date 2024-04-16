import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './../../styles/Header.css'

function Header() {
          return (
                    <>
                              <Navbar bg="primary" data-bs-theme="dark">
                                        <Container>
                                                  <NavLink to="/home" style={{color:'white'}}>Navbar</NavLink>
                                                  <Nav className="me-auto">
                                                            <NavLink to="/home" style={{marginLeft: '35px', color:'white'}}>Home</NavLink>
                                                            <NavLink className={(link) => link.isActive ? 'active' : '' } to="/courses" style={{marginLeft: '35px', color:'white'}}>Courses</NavLink>
                                                            <NavLink to="/about" style={{ marginLeft: '35px', color: 'white' }}>About</NavLink>
                                                            <NavLink to="/login" style={{ marginLeft: '35px', color: 'white' }}>Login</NavLink>
                                                            <NavLink to="/panel" style={{ marginLeft: '35px', color: 'white' }}>Panel</NavLink>
                                                            <NavLink to="/dashbord" style={{ marginLeft: '35px', color: 'white' }}>Dashbord</NavLink>

                                                  </Nav>
                                        </Container>
                              </Navbar>
                    </>
          )
}

export default Header