import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://claykingdom.onrender.com/topProducts/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="py-5" style={{ backgroundColor: '#FCF8F7', paddingTop: '30px' }}>
            <h1 className='my-5'>Our <span style={{ color: '#663333' }}>Featured</span> Products</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(pd => <Product key={pd._id}
                            product={pd}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;