import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
          return (
                    <>
                              <Container>
                                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                                        <Nav className="me-auto">
                                                  <Link to="/home">Home</Link>
                                                  <Link to="/courses">sourses</Link>
                                                  <Link to="/about">about</Link>
                                        </Nav>
                              </Container>
                    </>
          )
}

export default Header