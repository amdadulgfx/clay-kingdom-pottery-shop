import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const active = {
    color: '#af4747',
    borderBottom: '1px solid #af4747',
    fontWeight: '500'
}
const linkColor = {
    color: '#663333',
    textDecoration: 'none'
};
const Navigation = () => {
    const { user, logOut } = useAuth();
    // console.log(user);

    return (
        <Navbar collapseOnSelect style={{ backgroundColor: '#FFF1EE', color: '#663333' }} expand="lg" >
            <Container>
                <Navbar.Brand className="d-flex link-hover align-items-center" style={linkColor} href="#home">
                    <img style={{ height: 60, marginRight: '10px', }} src="https://i.ibb.co/FxjMhdv/clay-Kingdom.png" alt="clay kingdom logo" />
                    <p style={{ lineHeight: 1.2, marginTop: '5px', display: 'inline' }}><b>Clay Kingdom</b></p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link exact={true} activeStyle={active} style={linkColor} className='px-2 link-hover' to='/'>Home</Link>
                        <Link activeStyle={active} style={linkColor} className='px-2 link-hover' to='/explore'>Explore</Link>
                        {
                            user.email && <div>
                                <Link activeStyle={active} style={linkColor} className='px-2 link-hover' to='/dashboard'>Dashboard</Link>
                                <Link style={linkColor} className='px-2 link-hover' to='/myOrders'>My Orders</Link>
                                <Link style={linkColor} className='px-2 link-hover' to='/pay'>Pay</Link>
                                <Link style={linkColor} className='px-2 link-hover' to='/Review'>Review</Link>
                            </div>
                        }
                    </Nav>
                    <Nav >
                        {
                            user.email ? <div className='d-flex align-items-center'> {user.displayName}
                                <Button style={{ ...linkColor, backgroundColor: '#FFF1EE', border: 'none' }} onClick={logOut} className='px-2 link-hover'>Logout</Button></div> : <div>
                                <Link style={linkColor} className='px-2 link-hover' to='/login'>Login</Link>
                            </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;