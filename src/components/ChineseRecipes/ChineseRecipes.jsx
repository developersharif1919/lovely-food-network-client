/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const ChineseRecipes = () => {
    return (
        <section id="us-recipe" className='p-5'>
            <Container>
                <div style={{width:'500px',margin:'0 auto'}}>
                    <Marquee speed={100}>
                       <h2 style={{color:'green',fontWeight:'800'}}>Chinese Recipes</h2>
                    </Marquee>
                </div>
                <p className='mt-2'>Szechwan Shrimp, Kung Pao Chicken, Spicy Crispy Beef, Sweet and Sour Pork: get top recipes for the Chinese recipes you crave.</p>
            </Container>
        </section>
    );
};

export default ChineseRecipes;
