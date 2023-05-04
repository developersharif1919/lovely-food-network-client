
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';
import ChefSpecialRecipes from '../../components/ChefSpecialRecipes/ChefSpecialRecipes';
import LazyLoad from 'react-lazy-load';


const ChefRecipe = () => {
    const data = useLoaderData();

    const [recipeData, setRecipeData] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://lovely-food-network-server-developersharif1919.vercel.app/recipes/${data.id}`)
            .then(response => response.json())
            .then(data => {
                setRecipeData(data);
                setLoading(false);
            });
    }, [data.id]);

    useEffect(() => {
        if (recipeData !== null) {
            setRecipes(recipeData.recipes);
        }
    }, [recipeData]);

    // console.log('ssss',data)
    return (
        <div className='text-center mt-5'>
            <div>
                <Container>
                    <Row className='d-flex justify-content-between border'>
                        <Col sm={12} md={6} >
                                <LazyLoad>
                                    <Image src={data.chefPictureUrl} fluid />
                                </LazyLoad>
                        </Col>
                        <Col sm={12} md={6} className="d-flex align-items-center justify-content-end" style={{ textAlign: 'right' }}>
                            <div>
                                <h1>Chef Name: {data.chefName}</h1>
                                <p>Chef Bio: Some descriptive text goes here.</p>
                                <h4>Likes: {data.likes}</h4>
                                <h4>Total Recipes: {data.numberOfRecipes}</h4>
                                <h4>Experience: {data.yearsOfExperience} Years</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container className="mt-5 mb-5">
                    <h2 className="mt-5 mb-5">Chef Special Recipes</h2>
                    <Row xs={1} sm={2} md={3} className="g-4">
                        {recipes.map((recipe, index) => (
                            <ChefSpecialRecipes key={`${recipe.recipe_id}-${index}`} recipe={recipe}></ChefSpecialRecipes>
                        ))}
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default ChefRecipe;