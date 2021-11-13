import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://radiant-gorge-33858.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    reset()
                }
            })
    };
    return (
        <div style={{ height: '90vh' }}>
            <h4 className='pt-2'>Make An Admin</h4>
            <Container className="mb-5">
                <Form className="shadow p-5  bg-body rounded " onSubmit={handleSubmit(onSubmit)}>


                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="email" placeholder="Enter email address"
                            {...register("email", { required: true })}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Make Admin
                    </Button>
                </Form>

                {success && <Alert variant="success">
                    Made Admin Succesfully!
                </Alert>}
            </Container>
        </div>
    );
};

export default MakeAdmin;