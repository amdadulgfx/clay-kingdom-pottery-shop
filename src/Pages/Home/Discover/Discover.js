import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Discover = () => {
    return (
        <div className='py-5'>
            <Container>
                <Row className='align-items-center' md={2} sm={1} xs={1}>
                    <Col md={5}>
                        <h2>Beautiful Ceramics, Tableware and Gifts from the Bangladeshi Culture</h2>
                        <p style={{ textAlign: 'left' }} >The history of Bangladeshi pottery as an art form is an old one, dating as far back as the Mohenjodaro and Harappa civilisation. Some earthenware was found after the excavation of Mahasthangarh in Bogra (300 BC). In addition to that, the Paharpur and Mainamoti excavation sites yielded some truly exquisite pieces.</p>
                        <Button className='clay-button' variant="outline-danger">Dicover More</Button>
                    </Col>
                    <Col md={7}>
                        <img style={{ objectFit: 'cover', height: '400px' }} src="https://i.ibb.co/VCDKmt6/oshin-khandelwal-fq839f-SNEuo-unsplash.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Discover;