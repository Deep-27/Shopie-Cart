import React, {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';

import Helmet from "../components/Helmet/Helmet";

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import Services from '../services/services';
import ProductsLists from '../components/UI/ProductsLists';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/counter-timer-img.png';

import '../styles/home.css';



const Home = () => {


    const [trendingProducts , setTrendingProducts] = useState(products)
    const [bestSalesProducts , setBestSalesProducts] = useState(products)
    const [mobileProducts , setMobileProducts] = useState(products)
    const [wirelessProducts , setWirelessProducts] = useState(products)
    const [popularProducts , setPopularProducts] = useState(products)


    const year = new Date().getFullYear() ;

    useEffect(()=>{
        const filteredTrendingProducts = products.filter(item => item.category === 'chair'
        );
        const filteredBestSalesProducts = products.filter(item => item.category === 'sofa'
        );
        const filteredMobileProducts = products.filter(item => item.category === 'mobile'
        );
        const filteredWirelessProducts = products.filter(item => item.category === 'wireless'
        );
        const filteredPopularProducts = products.filter(item => item.category === 'watch'
        );

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    }, []);


  return <Helmet title ={'Home'}>
    <section className="hero__section">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <p className="hero__subtitle"> Trending product in {year}</p>

                        <h2> Make Your Interior More Attractive & Modern</h2>
                        <p> Description related to the products will be provided below. 
                         Description related to the products will be provided below. </p>

                        <motion.button whileTap={{scale:1.2}} className='buy__btn'> <Link to='/shop'>
                            SHOP NOW
                        </Link></motion.button>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <img src={heroImg} alt=""/>
                </Col>
            </Row>
        </Container>
    </section>

    <Services/>
    <section className="trending__products">
        <Container>
            <Row>
                <Col lg="12" className='text-center'>
                    <h2 className='section__title'> Trending products</h2>
                </Col>
                <ProductsLists data={trendingProducts} />
            </Row>
        </Container>   
    </section>

    <section className='best__sales'>
        <Container>
        <Row>
                <Col lg="12" className='text-center'>
                    <h2 className='section__title'> Best Sales</h2>
                </Col>
                <ProductsLists data={bestSalesProducts} />
            </Row>
        </Container>
    </section>

    <section className="timer__count">
        <Container>
            <Row>
                <Col lg='6' md='12' className='count__down-col'>
                <div className="clock__top-content">
                    <h4 className='text-white fs-6 mb-2'> Limited Offers</h4>
                    <h3 className='text-white fs-5 mb-3'> Quality Armchair</h3>
                </div>
                <Clock />
                <motion.button whileTap={{ scale:1.2}} className='buy__btn store__btn'><Link to='/shop'>Visit Store</Link></motion.button>
                </Col>

                <Col lg='6' md='12' className='text-end counter__img'>
                    <img src={counterImg} alt="" />
                </Col>
            </Row> 
        </Container>
    </section>

    <section className="new__arrival">
        <Container>
            <Row>
            <Col lg="12" className='text-center mb-5' >
                    <h2 className='section__title'> New Arrivals</h2>
                </Col>
                <ProductsLists data={mobileProducts} />
                <ProductsLists data={wirelessProducts} />

            </Row>
        </Container>
    </section>

    <section className="popular_category">
        <Container>
            <Row>
            <Col lg="12" className='text-center mb-5'>
                    <h2 className='section__title'> Popular in Category</h2>
                </Col>
                <ProductsLists data={popularProducts} />
            </Row>
        </Container>
    </section>

  </Helmet>
}

export default Home;
