/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const RecipeCarousel = () => {
  const recipes = [
    {
      name: 'Daddy s Shrimp Toast',
      description: 'Make the shrimp paste: Mix shrimp, onion, water chestnuts, celery, and green onion together in a mixing bowl. Stir in crabmeat, egg, parsley, sesame oil, garlic, soy sauce, salt, and pepper.',
      bgImageUrl: 'https://cdn.shopify.com/s/files/1/0070/7032/files/food-photgraphy-tips.png?format=jpg&quality=90&v=1657891849',
      imageUrl:'https://img.freepik.com/free-photo/shrimp-sauteed-garlic-soy-caramel_2829-13792.jpg?w=740&t=st=1683206277~exp=1683206877~hmac=5282abd3ab7a966f2ff80ab4d9ad3a47146da318c67ae260f41a7cd5320b8b06'
    },
    {
      name: 'Chinese Recipes',
      description: 'Szechwan Shrimp, Kung Pao Chicken, Spicy Crispy Beef, Sweet and Sour Pork: get top recipes for the Chinese recipes you crave.',
      bgImageUrl: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5b19471e-8ae1-11ea-9ea5-63981dbe6eb1.jpg?crop=1500%2C1000%2C0%2C0',
      imageUrl:'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'
    },
    {
      name: 'Bang Bang Chicken',
      description: 'Combine potato starch, flour, salt, pepper, and shichimi in a medium bowl. Pour into a large plastic resealable bag. Add chicken; seal the bag and shake until chicken is well coated.',
      bgImageUrl: 'https://thumbs.dreamstime.com/b/top-vertical-view-table-full-food-drinks-happy-people-friends-celebrating-enjoy-together-eating-having-fun-concept-social-179552095.jpg',
      imageUrl:'https://img.freepik.com/free-photo/chicken-prepared-sauce-served-with-lemon-slices_141793-1148.jpg?w=740&t=st=1683206379~exp=1683206979~hmac=4295feb9442e8995657f920c8e5bf24d34238e39148bcd7dd029eac0b903d6c9'
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
