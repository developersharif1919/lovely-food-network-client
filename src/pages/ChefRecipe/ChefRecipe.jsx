
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';
import ChefSpecialRecipes from '../../components/ChefSpecialRecipes/ChefSpecialRecipes';
import LazyLoad from 'react-lazy-load';
import { AiFillLike } from "react-icons/ai";
import './ChefRecipe.css'


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

    return (
        <div className='text-center mt-5'>
            <div>
                <Container>
                    <Row className='d-flex justify-content-between border p-3'>
                        <Col sm={12} md={6} className='hover-effect'>
                            <LazyLoad>
                                <Image
                                    src={data.chefPictureUrl}
                                    fluid
                                    className=""
                                />
                            </LazyLoad>
                        </Col>
                        <Col sm={12} md={6} className="d-flex align-items-center justify-content-end" style={{ textAlign: 'center' }}>
                            <div>
                                <h1 style={{ color: 'green', fontWeight: '700' }}>{data.chefName}</h1>
                                <p>Bio: {data.bio}</p>
                                <h4>Experience: {data.yearsOfExperience} Years</h4>
                                <h4>Total Recipes: {data.numberOfRecipes}</h4>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <AiFillLike className='p-0 m-0 fs-2' style={{ color: '#1e90ff' }}></AiFillLike>
                                    <h4 className='p-0 m-0'> {data.likes}</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container className="mt-5 mb-5">
                    <h2 className="mt-5 mb-5  text-uppercase" style={{ color: 'green', fontWeight: '700' }}>Chef Special Recipes</h2>
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