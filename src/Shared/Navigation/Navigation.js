import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const linkColor = { color: '#663333', textDecoration: 'none' };
    return (
        <Navbar collapseOnSelect style={{ backgroundColor: '#FFF1EE', color: '#663333' }} expand="lg" >
            <Container>
                <Navbar.Brand className="d-flex link-hover" style={linkColor} href="#home">
                    <img style={{ height: 60, marginRight: '10px', }} src="https://i.ibb.co/FxjMhdv/clay-Kingdom.png" alt="clay kingdom logo" />
                    <p style={{ lineHeight: 1.2, marginTop: '5px', display: 'inline' }}><b>Clay <br /> Kingdom</b></p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link style={linkColor} className='px-2 link-hover' to='/home'>Home</Link>
                    </Nav>
                    <Nav >
                        <Link style={linkColor} className='px-2 link-hover' to='/explore'>Explore</Link>
                        <Link style={linkColor} className='px-2 link-hover' to='/login'>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;