import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Navigation, { linkColor } from '../../../Shared/Navigation/Navigation';
import AddReview from '../AddReview/AddReview';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import { faEdit, faHome, faSignOutAlt, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../../hooks/useAuth';
const sideBar = {
    backgroundColor: "#fcd2c9",
    color: '#663333',
    textAlign: 'left'
}
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    return (
        <div style={{ width: '100%', backgroundColor: '#f4b0a4', overflow: 'hidden' }}>

            <Row md={2}>
                <Col md={3}>
                    <div style={sideBar} className='d-flex flex-column justify-content-between  h-100 pt-3 pb-5'>
                        <div >
                            <p className='text-center'><b>{user.displayName} <br /> {user.email}</b></p>


                            <ul style={{ listStyle: 'none' }}>
                                <li>
                                    <FontAwesomeIcon icon={faHome} /><Link style={linkColor} className='mx-3 link-hover' to="/home">Home</Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faSortAmountDownAlt} /><Link style={linkColor} className='mx-3 link-hover' to={`${url}/myOrder`}>My Orders</Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPaypal} />
                                    <Link style={linkColor} className='mx-3 link-hover' to={`${url}/pay`}> Pay</Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEdit} />
                                    <Link style={linkColor} className='mx-3 link-hover' to={`${url}/addReview`}>Add Review</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {


                                user?.email ? <ul style={{ listStyle: 'none' }}>
                                    <div >
                                        <li>

                                            <FontAwesomeIcon icon={faSignOutAlt} />
                                            <Button style={{ ...linkColor, backgroundColor: 'transparent', border: 'none' }} onClick={logOut} className='mx-2 link-hover mb-2'>Logout</Button>
                                        </li>
                                    </div>
                                </ul> : ''


                            }

                        </div>


                    </div>

                </Col>
                <Col md={9}>
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
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