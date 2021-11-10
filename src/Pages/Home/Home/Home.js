import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Discover from '../Discover/Discover';
import Footer from '../../../Shared/Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <Products></Products>
            <Discover></Discover>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>


    );
};

export default Home;