import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import {

    useLocation
} from "react-router-dom";
const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    // const location = useLocation();
    // console.log(location);
    useEffect(() => {
        fetch(`https://claykingdom.onrender.com/allProducts`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {

        // console.log(id);
        const proceed = window.confirm('Do you really want to delete this product?')
        if (proceed) {


            fetch(`https://claykingdom.onrender.com/allProducts/${id}`, {
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
        <div >
            <Container fluid className='pb-5 pt-2' data-aos="zoom-in">
                <h4 className='text-center'>Manage Products</h4>
                <Table responsive="sm" >
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