import axios from 'axios';
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/addProduct', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        reset();
    };
    return (
        <div>
            <h2>this is add product</h2>
            <Container>
                <Form className="shadow-sm p-5 mb-5 bg-body rounded"
                    onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter Your Name"

                            {...register("name", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Product color"

                            {...register("color", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Product type"

                            {...register("type", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter Product Picture Url"

                            {...register("img", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control as="textarea" rows={3} placeholder="Enter Description"

                            {...register("description", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="number" placeholder="Rate a Number 0 to 5 "

                            {...register("rating", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="number" placeholder="Product quantity"

                            {...register("stock", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="number" placeholder="Product Price Per Unit"

                            {...register("price", { required: true })} />

                    </Form.Group>





                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddAProduct;