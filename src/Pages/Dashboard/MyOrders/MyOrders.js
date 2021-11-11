import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user])

    const handleDelete = id => {

    }
    return (
        <div>
            <Container className='py-5' data-aos="zoom-in">
                <h3 className='text-center py-5'>My Orders</h3>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Camp Name</th>
                            <th>Status</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(myOrder =>

                                <tr key={myOrder._id}>
                                    <td>{myOrders.indexOf(myOrder) + 1}</td>
                                    <td >{myOrder.productName}</td>
                                    <td className='success'>{myOrder.status}</td>
                                    <td>

                                        <Button size='sm'
                                            onClick={() => handleDelete(myOrder._id)}
                                            variant='outline-danger'>Cancel</Button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyOrders;