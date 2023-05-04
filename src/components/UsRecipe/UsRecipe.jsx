/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const UsRecipe = () => {
    return (
        <section id="us-recipe" className='p-5'>
            <Container>
                <div style={{width:'500px',margin:'0 auto'}}>
                    <Marquee className='text-success' speed={100}>
                       <h2>Chinese Recipes</h2>
                    </Marquee>
                </div>
                <p className='mt-2'>Find recipes from across the United States! Allrecipes has recipes for every region and state, including mouthwatering Southern favorites, classic fare from New England, and spicy Southwest dishes.</p>
            </Container>
        </section>
    );
};

export default UsRecipe;
