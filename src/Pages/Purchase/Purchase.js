import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Purchase = () => {
    const [product, setProduct] = useState({});
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const { id } = useParams();
    const { user } = useAuth();



    useEffect(() => {
        fetch(`http://localhost:5000/allProducts/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    const { name, description, img, price, stock, rating, color, type } = product;

    const onSubmit = data => {
        data.productName = name;
        data.status = 'pending';
        axios.post('http://localhost:5000/orders', {
            ...data
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        reset();
    };
    return (
        <div >
            <div style={{ backgroundColor: '#FCF8F7' }}>
                <Navigation></Navigation>
                <h2> PRODUCT</h2>
                <Container className='py-5'>
                    <Row md={2} sm={1} xs={1}>
                        <Col md={7}>
                            <div style={{ textAlign: 'left' }}>
                                <h5>{name}</h5>
                                <p style={{ textAlign: 'left' }}>
                                    <Rating
                                        initialRating={rating}
                                        readonly
                                        emptySymbol="far fa-star rating-color "
                                        fullSymbol="fas fa-star rating-color "
                                    />
                                </p>
                                <p >{description}</p>
                                <p>Price: ${price}</p>
                                <p>Color: {color}</p>
                                <p>Product Type: {type}</p>
                                <p>In Stock: {stock >= 0 ? <span className='text-success'>{stock} left</span> : <span className='text-danger'>Out of Stock</span>
                                }</p>
                                <img style={{ width: 600 }} src={img} alt="" />

                            </div>

                        </Col>
                        <Col style={{ textAlign: 'left' }} md={5}>

                            <div>
                                <Form className="shadow-sm p-5 mb-5 bg-body rounded"
                                    onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address:</Form.Label>
                                        <Form.Control readOnly type="email" placeholder="Enter email"
                                            defaultValue={user.email}
                                            {...register("email", { required: true })} />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name:</Form.Label>
                                        <Form.Control readOnly type="text" placeholder="Enter Your Name"
                                            defaultValue={user.displayName}
                                            {...register("displayName", { required: true })} />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Product Name:</Form.Label>
                                        <Form.Control readOnly type="text" placeholder="Enter Product Name"
                                            defaultValue={name}
                                            {...register("productName")} />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                                        <Form.Label>Quantity:</Form.Label>
                                        <Form.Control type="number" placeholder="Quantity"
                                            {...register("quantity", { required: true })}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Form.Label>Address:</Form.Label>
                                        <Form.Control type="text" placeholder="Address"
                                            {...register("address", { required: true })}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label>Phone:</Form.Label>
                                        <Form.Control type="text" placeholder="Phone Number"
                                            {...register("phone", { required: true })}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Purchase Order
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;