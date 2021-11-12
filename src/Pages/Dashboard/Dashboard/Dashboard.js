import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { NavLink as Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { active, linkColor } from '../../../Shared/Navigation/Navigation';
import AddReview from '../AddReview/AddReview';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import { faEdit, faHome, faPlusSquare, faSignOutAlt, faSortAmountDownAlt, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../../hooks/useAuth';
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddAProduct from '../AddAProduct/AddAProduct';
const sideBar = {
    backgroundColor: "#fcd2c9",
    color: '#663333',
    textAlign: 'left'
}
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    return (
        <div style={{ width: '100%', backgroundColor: '#f4b0a4', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#FFF1EE', marginBottom: '0px' }}>
                <Row md={2}>
                    <Col md={3}>
                        <div className="d-flex p-2 align-items-center">
                            <img style={{ height: 50, marginRight: '10px', }} src="https://i.ibb.co/FxjMhdv/clay-Kingdom.png" alt="clay kingdom logo" />
                            <h5 style={{ ...linkColor, marginTop: '5px', }}><b>Clay Kingdom</b></h5>
                        </div>
                    </Col>
                    <Col md={9}>

                        <h3 className="p-2">Dashboard</h3>
                    </Col>
                </Row>
            </div>
            <Row md={2}>
                <Col md={3}>
                    <div style={sideBar} className='d-flex flex-column justify-content-between  h-100 pt-3 pb-5'>
                        <div >
                            <p className='text-center'><b>{user.displayName} <br /> {user.email}</b></p>


                            <ul style={{ listStyle: 'none' }}>

                                <li>
                                    <Link activeStyle={active} style={linkColor} className='mx-3 link-hover' to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link>
                                </li>
                                {
                                    !admin && <div>
                                        <li>
                                            <Link activeStyle={active} style={linkColor} className='mx-3 link-hover' to={`${url}/myOrder`}><FontAwesomeIcon icon={faSortAmountDownAlt} /> My Orders</Link>
                                        </li>
                                        <li>

                                            <Link activeStyle={active} style={linkColor} className='mx-3 link-hover' to={`${url}/pay`}><FontAwesomeIcon icon={faMoneyBillAlt} />{" "} Pay</Link>
                                        </li>
                                        <li>

                                            <Link activeStyle={active} style={linkColor} className='mx-3 link-hover' to={`${url}/addReview`}><FontAwesomeIcon icon={faEdit} /> Add Review</Link>
                                        </li>
                                    </div>
                                }

                                {
                                    admin && <div>
                                        <li>

                                            <Link activeStyle={active} style={linkColor} className='mx-3 link-hover' to={`${url}/makeAdmin`}><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                                        </li>
                                        <li>

                                            <Link activeStyle={active} style={linkColor} className='mx-3 link-hover' to={`${url}/addAProduct`}><FontAwesomeIcon icon={faPlusSquare} /> Add A Product</Link>
                                        </li>

                                        <li>

                                            <Link activeStyle={active} style={linkColor} className='mx-3 link-hover' to={`${url}/manageAllOrders`}><FontAwesomeIcon icon={faTasks} /> Manage All Orders</Link>
                                        </li>
                                        <li>

                                            <Link activeStyle={active} style={linkColor} className='mx-3 link-hover' to={`${url}/manageProducts`}><FontAwesomeIcon icon={faTasks} /> Manage Products</Link>
                                        </li>
                                    </div>
                                }
                            </ul>
                        </div>
                        <div>
                            {


                                user?.email ? <ul style={{ listStyle: 'none' }}>

                                    <li>
                                        <Button style={{ ...linkColor, backgroundColor: 'transparent', border: 'none' }} onClick={logOut} className='mx-2 link-hover '><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Button>
                                    </li>

                                </ul> : ''


                            }

                        </div>


                    </div>

                </Col>
                <Col md={9}>
                    <Switch>
                        <Route exact path={path}>
                            {
                                admin ? <ManageAllOrders></ManageAllOrders> :
                                    <MyOrders></MyOrders>
                            }
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
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addAProduct`}>
                            <AddAProduct></AddAProduct>
                        </AdminRoute>
                    </Switch>
                </Col>
            </Row>

        </div>
    );
};

export default Dashboard;