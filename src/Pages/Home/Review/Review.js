import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = (props) => {
    const { name, img, comment, rating } = props.review
    return (
        <Col>
            <Card border="light" >
                <Card.Header className='d-flex align-items-center'>
                    <div>

                        <img style={{}} src={img} alt="" />
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
                    <Card.Text style={{ height: '150px' }}>
                        {comment.slice(0, 200)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;