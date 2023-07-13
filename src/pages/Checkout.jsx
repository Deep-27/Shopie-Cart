import React from 'react';
import { Container, Row , Col, FormGroup } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';

const Checkout = () => {

  const totalQty = useSelector((state)=> state.cart.totalQuantity)
  const totalAmount = useSelector((state)=> state.cart.totalAmount)

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Enter your name' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='email' placeholder='Enter your email' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='number' placeholder='Enter your number' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Address' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='City' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Postal code' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Country' />
                </FormGroup>
              </form>
            </Col>
            <Col lg='4'>
               <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>$ {totalAmount}</span></h6>
                <h6>Free Shipping</h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>
                <button className='buy__btn auth__btn w-100 bg-white text-black fs-0.9rem'>Place an order</button>
               </div>
             
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout;
