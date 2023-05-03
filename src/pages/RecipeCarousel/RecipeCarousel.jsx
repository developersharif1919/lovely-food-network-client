/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const RecipeCarousel = () => {
  const recipes = [
    {
      name: 'Recipe 1',
      description: 'Description 1',
      bgImageUrl: 'https://cdn.shopify.com/s/files/1/0070/7032/files/food-photgraphy-tips.png?format=jpg&quality=90&v=1657891849',
      imageUrl:'https://www.thespruceeats.com/thmb/5f1AUqYbY4CsjHSeqvDUau7OjaQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg'
    },
    {
      name: 'Recipe 2',
      description: 'Description 2',
      bgImageUrl: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5b19471e-8ae1-11ea-9ea5-63981dbe6eb1.jpg?crop=1500%2C1000%2C0%2C0',
      imageUrl:'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'
    },
    {
      name: 'Recipe 3',
      description: 'Description 3',
      bgImageUrl: 'https://thumbs.dreamstime.com/b/top-vertical-view-table-full-food-drinks-happy-people-friends-celebrating-enjoy-together-eating-having-fun-concept-social-179552095.jpg',
      imageUrl:'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'
    },
  ];

  return (
    <Carousel fade className='mt-3'>
      {recipes.map((recipe, index) => (
        <Carousel.Item key={index}>
          <div
            className="recipe-slide"
            style={{
              backgroundImage: `url(${recipe.bgImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition:'center center',
              height: '400px',
              position: 'relative'
            }}
          >
            <div
              className="overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
            <Container >
              <Row className='d-flex justify-content-between align-items-center p-5'>
                <Col md={6} style={{zIndex:'11'}}>
                  <div className="recipe-content text-white" style={{ textAlign: 'left '}} >
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                  </div>
                </Col>
                <Col md={6} style={{zIndex:'11'}}>
                  <div className="recipe-image rounded">
                    <img className='w-100 rounded' src={recipe.imageUrl} alt={recipe.name} />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default RecipeCarousel;
