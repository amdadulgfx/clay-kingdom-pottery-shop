import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://radiant-gorge-33858.herokuapp.com/allProducts`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {

        // console.log(id);
        const proceed = window.confirm('Do you really want to delete this product?')
        if (proceed) {


            fetch(`https://radiant-gorge-33858.herokuapp.com/allProducts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Do some stuff...
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!');
                        const remainingUsers = products.filter(pd => pd._id !== id);
                        setProducts(remainingUsers);
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
                            <th>Product Details</th>

                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(pd =>

                                <tr key={pd._id}>
                                    <td>{products.indexOf(pd) + 1}</td>
                                    <td style={{ textAlign: 'left' }}>
                                        <div className='d-flex'>
                                            <img style={{ height: '100px', width: '100px', objectFit: 'cover' }} src={pd.img} alt="" />
                                            <div className='ms-1 lh-2'>
                                                <p>Name: {pd.name} <br />
                                                    ID: {pd._id} <br />
                                                    Price: {pd.price} <br />
                                                    Stock: {pd.stock}


                                                </p>


                                            </div>

                                        </div>
                                    </td>

                                    <td>

                                        <Button size='sm'
                                            onClick={() => handleDelete(pd._id)}
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

export default ManageProducts;