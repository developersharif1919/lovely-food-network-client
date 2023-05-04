/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const CustomerReview = () => {
  return (
    <section id="reviews" className='bg-dark text-white p-5 mb-5'>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h2 className='mb-5'>Customer Reviews</h2>
            <Carousel>
            <Carousel.Item style={{height:'500px'}}>
                <div className='' style={{width:'200px', height:'200px', borderRadius:'200px',border:'1px solid red',margin:'0 auto'}}>
                <img className='w-100 h-100 rounded rounded-circle' src='https://img.freepik.com/free-photo/happy-young-woman-with-red-lipstick_1153-396.jpg?w=740&t=st=1683190363~exp=1683190963~hmac=441508353eead9a1577fdffeecc0bbe70a33b7beee88bb216c0b3d258e02d8ea' alt="Customer" />
                </div>
                <p>"I absolutely love this recipe website! The recipes are easy to follow and always turn out delicious. Highly recommend!.A spicy jambalaya with chicken, andouille sausage, rice, and Cajun seasonings that's easy to make in one pot."</p>
                <h5>Amelia</h5>
                <p>Chicago, IL</p>
              </Carousel.Item>
              <Carousel.Item style={{height:'500px'}}>
                <div className='' style={{width:'200px', height:'200px', borderRadius:'200px',border:'1px solid red',margin:'0 auto'}}>
                <img className='w-100 h-100 rounded rounded-circle' src='https://img.freepik.com/free-photo/model-cheerful-summer-young-closeup_1301-823.jpg?w=740&t=st=1683191288~exp=1683191888~hmac=946a6952ed56359b0432d4af34e3ea1b19443f83329524d0bf0ddb21b152987e' alt="Customer" />
                </div>
                <p>"I absolutely love this recipe website! The recipes are easy to follow and always turn out delicious. Highly recommend!"</p>
                <h5>Charlotte</h5>
                <p>Chicago, IL</p>
              </Carousel.Item>
              <Carousel.Item style={{height:'500px'}}>
                <div className='' style={{width:'200px', height:'200px', borderRadius:'200px',border:'1px solid red',margin:'0 auto'}}>
                <img className='w-100 h-100 rounded rounded-circle' src='https://img.freepik.com/premium-photo/portrait-happy-young-casual-man-standing_171337-29744.jpg?w=740' alt="Customer" />
                </div>
                <p>"I absolutely love this recipe website! The recipes are easy to follow and always turn out delicious. Highly recommend!"</p>
                <h5>Jane Doe</h5>
                <p>Chicago, IL</p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomerReview;

