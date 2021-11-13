import axios from 'axios';
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {

        axios.post('https://radiant-gorge-33858.herokuapp.com/reviews', {
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
        <div>
            <h3>Give Use Feedback</h3>
            <Container>
                <Form className="shadow-sm p-5 mb-5 bg-body rounded"
                    onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control readOnly type="text" placeholder="Enter Your Name"
                            defaultValue={user.displayName}
                            {...register("name", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter Your Picture Url"

                            {...register("img", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Product Name that you have bought"

                            {...register("pdName", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control as="textarea" rows={3} placeholder="Enter Description"

                            {...register("comment", { required: true })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="number" placeholder="Rate a Number 0 to 5"

                            {...register("rating", { required: true })} />

                    </Form.Group>





                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddReview;