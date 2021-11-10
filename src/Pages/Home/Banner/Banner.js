import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Banner.css';
import Typical from 'react-typical'
const Banner = () => {
    return (
        <div className='banner' style={{ height: 500, color: "#663333" }}>
            <Container >
                <h1 style={{ paddingTop: '80px' }}>Exclusive Ceramics and Pottery Retailer</h1>

                <Col md={6} >
                    <p style={{ fontSize: '50px', marginTop: '80px' }}>
                        Pottery Made With
                        <Typical
                            steps={['Trust!', 2000,
                                'Love!', 2000,
                                'Care!', 2000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </p>
                </Col>

            </Container>

        </div >
    );
};

export default Banner;