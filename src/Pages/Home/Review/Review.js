import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = (props) => {
    const { name, img, comment, rating, pdName } = props.review
    return (
        <Col>
            <Card border="light" >
                <Card.Header className='d-flex align-items-center'>


                    <div >

                        <img style={{ height: '72px', width: '72px', borderRadius: '15px' }} src={img} className='img-fluid' alt="" />
                    </div>
                    <div style={{ textAlign: 'left', paddingLeft: '10px' }}>
                        <h4>{name}</h4>
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol="far fa-star rating-color"
                            fullSymbol="fas fa-star rating-color"
                        />
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Text style={{ paddingBottom: '10px' }}>
                        {comment}
                    </Card.Text>
                </Card.Body>
                <Card.Footer >
                    <small className="text-muted">{pdName}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Review;