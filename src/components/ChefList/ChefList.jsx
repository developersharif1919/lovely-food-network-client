/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const ChefList = (chefData) => {
    const {id, chefPictureUrl, chefName, numberOfProjects, numberOfRecipes, yearsOfExperience, likes} = chefData.chefData;
    return (
        <Card style={{height:'500px'}}>
          <Card.Img variant="top" src={chefPictureUrl} />
          <Card.Body>
            <Card.Title className='mt-4'>{chefName}</Card.Title>
            <Card.Text>Experience: {yearsOfExperience}</Card.Text>
            <Card.Text>Likes: {likes}</Card.Text>
            <Card.Text>Number Of Recipes: {numberOfRecipes}</Card.Text>
          </Card.Body>
          <Card.Footer className='p-0'>
            <Button variant="outline-success" className='w-100 h-100'>View Recipe</Button>
          </Card.Footer>
        </Card>
    );
};

export default ChefList;