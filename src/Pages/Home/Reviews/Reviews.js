import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://radiant-gorge-33858.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='py-5' style={{ backgroundColor: '#FCF8F7' }}>
            <h1 className='pb-3'>Testimonials</h1>
            <Container  >
                <Row xs={1} md={4} className="g-4">
                    {
                        reviews.map(review => <Review key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;