import React from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
            <div className='d-flex justify-content-center my-5'>
                <img style={{ height: 60, marginRight: '10px', }} src="https://i.ibb.co/FxjMhdv/clay-Kingdom.png" alt="clay kingdom logo" />
                <h4 style={{ lineHeight: 1.2, marginTop: '5px', textAlign: 'left', color: '#663333' }}>Clay <br /> Kingdom</h4>
            </div>
            <div className='my-4'>
                <h3 className='mb-4'>Register</h3>
                <Container className="d-flex justify-content-center " >
                    <Col md={5}>
                        <Form className="shadow p-5 mb-5 bg-body rounded" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Your Name"
                                    defaultValue="test"
                                    {...register("name")} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Enter email"
                                    defaultValue="test"
                                    {...register("email")} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type="password" placeholder="Password"
                                    {...register("password", { required: true })}
                                />
                            </Form.Group>
                            <p>Already Registered? <Link to='/login'>Please Login</Link> </p>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Container>
            </div>
        </div >
    );
};

export default Register;

