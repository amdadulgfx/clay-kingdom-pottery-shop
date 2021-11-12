import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { name, price, rating, img, description, _id } = props.product;

    return (
        <Col>
            <Card className="border-0">
                <Card.Img style={{ height: '280px', objectFit: 'cover' }} variant="top" src={img} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>

                        <Card.Title>{name}</Card.Title> <p> <i>${price}</i> </p>
                    </div>
                    <Card.Text style={{ textAlign: 'left' }} >
                        <span >
                            <Rating
                                initialRating={rating}
                                readonly
                                emptySymbol="far fa-star rating-color "
                                fullSymbol="fas fa-star rating-color "
                            />
                        </span>
                        <br />
                        <p style={{ height: "60px" }}>
                            {description.slice(0, 120)}...
                        </p>
                        <br />
                        <Link to={`/purchase/${_id}`}>
                            <Button className='clay-button'>Purchase Now</Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;