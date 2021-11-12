import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [modified, setModified] = useState(0)
    // const { user } = useAuth();
    // const [remainingUsers, setRemainingUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
                setModified(0);
            })
    }, [modified]);

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

    const handleShipped = id => {
        const data = { status: 'shipped' }
        fetch(`http://localhost:5000/allOrders/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setModified(data.modifiedCount)
            })
    }
    return (
        <div>
            <Container className='py-5' data-aos="zoom-in">
                <h4 className='text-center pb-5'>All Orders</h4>
                <Table responsive="sm" bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Ordered By</th>
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
                                    <td >{myOrder.email}</td>
                                    <td >{myOrder.quantity}</td>
                                    <td className='success'>{myOrder.status}</td>
                                    <td>

                                        {
                                            myOrder.status === 'pending' ? <Button className='me-1' size='sm'
                                                onClick={() => handleShipped(myOrder._id)}
                                                variant='outline-success'>Shipped</Button> :
                                                <Button disabled className='me-1' size='sm'
                                                    onClick={() => handleShipped(myOrder._id)}
                                                    variant='outline-success'>Shipped</Button>
                                        }
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

export default ManageAllOrders;