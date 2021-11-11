import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Navigation, { linkColor } from '../../../Shared/Navigation/Navigation';
import AddReview from '../AddReview/AddReview';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import { faEdit, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../../hooks/useAuth';
const sideBar = {
    backgroundColor: "#fcd2c9",
    height: '100vh',
    textAlign: 'left'
}
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    return (
        <div style={{ width: '100%', backgroundColor: '#f4b0a4', overflow: 'hidden' }}>
            <Navigation></Navigation>
            <Row md={2}>
                <Col md={3}>
                    <div style={sideBar}>
                        <ul style={{ listStyle: 'none' }}>

                            <li><FontAwesomeIcon icon={faSortAmountDownAlt} /><Link style={linkColor} className='mx-3 link-hover' to={`${url}/myOrder`}>My Orders</Link></li>
                            <li><FontAwesomeIcon icon={faPaypal} /><Link style={linkColor} className='mx-3 link-hover' to={`${url}/pay`}> Pay</Link></li>
                            <li><FontAwesomeIcon icon={faEdit} /><Link style={linkColor} className='mx-3 link-hover' to={`${url}/addReview`}>Add Review</Link></li>
                            {
                                user?.email ? <div > {user.displayName} <br />
                                    <Button style={{ ...linkColor, backgroundColor: '#FFF1EE', border: 'none' }} onClick={logOut} className='px-2 link-hover'>Logout</Button></div> : ''

                            }
                        </ul>



                    </div>

                </Col>
                <Col md={9}>
                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/myOrder`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/addReview`}>
                            <AddReview></AddReview>
                        </Route>
                    </Switch>
                </Col>
            </Row>

        </div>
    );
};

export default Dashboard;