import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import Product from '../Home/Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div style={{ backgroundColor: '#FCF8F7' }}>
                <Navigation></Navigation>
                <div clas>
                    <h1 className='my-5'>Explore All the Products</h1>
                    <Container className='pb-5'>
                        <Row xs={1} md={3} className="g-4">
                            {
                                products.map(pd => <Product key={pd._id}
                                    product={pd}
                                ></Product>)
                            }
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;