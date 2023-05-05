/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";

const ChineseRecipes = () => {
    return (
        <section id="us-recipe" className='p-5'>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} style={{margin:'0 auto'}}>
                        <div style={{width:'100%',maxWidth:'500px',margin:'0 auto'}}>
                            <Marquee speed={100}>
                                <h2 style={{color:'green',fontWeight:'800'}}>Chinese Recipes</h2>
                            </Marquee>
                            <p className='mt-3'>Szechwan Shrimp, Kung Pao Chicken, Spicy Crispy Beef, Sweet and Sour Pork: get top recipes for the Chinese recipes you crave.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ChineseRecipes;
