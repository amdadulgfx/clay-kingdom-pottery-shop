import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faFacebook, faInstagram, faPinterest, faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <div>
            <Container fluid className='my-3'>
                <Row md={2} xs={1} sm={1} className='d-flex align-items-center'>
                    <Col>
                        <h2>Get in Touch</h2>
                        <p>Don't miss latest update and hot deals</p>
                        <div className="input-group mb-3 p-5">
                            <input placeholder='Enter your email address ' type="text" className="form-control py-3" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            <button className="btn btn-outline-danger" type="button" id="button-addon1">NOTIFY ME</button>
                        </div>
                    </Col>
                    <Col>
                        <h2>Follow Us</h2>
                        <p className='fs-3'>
                            <FontAwesomeIcon className=' me-2' icon={faFacebook} />
                            <FontAwesomeIcon className=' me-2' icon={faTwitter} />
                            <FontAwesomeIcon className=' me-2' icon={faInstagram} />
                            <FontAwesomeIcon className=' me-2' icon={faPinterest} />
                            <FontAwesomeIcon className=' me-2' icon={faTumblr} />

                        </p>
                    </Col>
                </Row>
            </Container>
            <hr />
            <p>Copyright © 2021, designed by AmdadulGFX</p>
        </div>
    );
};

export default Footer;