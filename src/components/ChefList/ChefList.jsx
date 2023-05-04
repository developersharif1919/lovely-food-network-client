/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefList = (chefData) => {
    const {id, chefPictureUrl, chefName, numberOfProjects, numberOfRecipes, yearsOfExperience, likes} = chefData.chefData;

    const navigate = useNavigate();

    const handleNavigation = (id)=> {
        navigate(`/ChefRecipe/${id}`)
     }

    return (
        <Card style={{height:'500px'}}>
          <LazyLoad>
          <Card.Img variant="top" src={chefPictureUrl} />
          </LazyLoad>
          <Card.Body>
            <Card.Title className='mt-4'>{chefName}</Card.Title>
            <Card.Text>Experience: {yearsOfExperience}</Card.Text>
            <Card.Text>Likes: {likes}</Card.Text>
            <Card.Text>Number Of Recipes: {numberOfRecipes}</Card.Text>
          </Card.Body>
          <Card.Footer className='p-0'>
            <Button onClick={()=>handleNavigation(id)} variant="outline-success" className='w-100 h-100'>View Recipe</Button>
          </Card.Footer>
        </Card>
    );
};

export default ChefList;