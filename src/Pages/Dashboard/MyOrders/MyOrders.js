import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    // const [remainingUsers, setRemainingUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user])

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Do you really want to delete this order?')
        if (proceed) {


            fetch(`http://localhost:5000/allOrders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Do some stuff...
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!');
                        const remainingUsers = myOrders.filter(pd => pd._id !== id);
                        setMyOrders(remainingUsers);
                    }
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <div>
            <Container className='py-5' data-aos="zoom-in">
                <h3 className='text-center pb-5'>My Orders</h3>
                <Table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
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
                                    <td >{myOrder.quantity}</td>
                                    <td className='success'>{myOrder.status}</td>
                                    <td>

                                        <Button size='sm'
                                            onClick={() => handleDelete(myOrder._id)}
                                            variant='outline-danger'>Delete</Button>
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