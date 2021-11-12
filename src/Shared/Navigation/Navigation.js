import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const active = {
    color: '#af4747',
    borderBottom: '1px solid #af4747',
    fontWeight: '500'
}
export const linkColor = {
    color: '#663333',
    textDecoration: 'none'
};
const Navigation = () => {
    const { user, logOut } = useAuth();
    // console.log(user);

    return (
        <Navbar collapseOnSelect style={{ backgroundColor: '#FFF1EE', color: '#663333', height: '70px' }} expand="lg" >
            <Container>
                <Navbar.Brand className="d-flex link-hover align-items-center" style={linkColor} href="#">
                    <img style={{ height: 40, marginRight: '10px', }} src="https://i.ibb.co/FxjMhdv/clay-Kingdom.png" alt="clay kingdom logo" />
                    <p style={{ marginTop: '5px', }}><b>Clay Kingdom</b></p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link exact={true} activeStyle={active} style={linkColor} className='px-2 link-hover active' to='/home'>Home</Link>
                        <Link activeStyle={active} style={linkColor} className='px-2 link-hover' to='/explore'>Explore</Link>
                        {
                            user.email && <div>
                                <Link activeStyle={active} style={linkColor} className='px-2 link-hover' to='/dashboard'>Dashboard</Link>

                            </div>
                        }
                    </Nav>
                    <Nav >
                        {
                            user.email ? <div className='d-flex align-items-center'> {user.displayName}
                                <Button style={{ ...linkColor, backgroundColor: '#FFF1EE', border: 'none' }} onClick={logOut} className='px-2 link-hover'><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Button></div> : <div>
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