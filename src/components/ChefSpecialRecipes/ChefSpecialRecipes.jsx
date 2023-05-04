/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { GrAed } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefSpecialRecipes = ({ recipe }) => {
    const ingredients = recipe.ingredients;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFavourites = () => {
        if (isFavorite) {
            toast.error('Recipe already added to favourites!');
        } else {
            setIsFavorite(true);
            toast.success('Recipe added to favourites!');
        }
    };

    return (
        <div>
            <div> 
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            <Card>
                <Card.Img variant="top" src={recipe.photo_url} />
                <Card.Body>
                    <Card.Title className='mt-4'>{recipe.recipe_title}</Card.Title>
                    <Card.Text>Experience:{recipe.yearsOfExperience} </Card.Text>
                    <Card.Text>Cooking Method: {recipe.cooking_method} </Card.Text>
                    <div className='d-flex justify-content-center'>
                        <h6>Ingredients:</h6>
                        <ul>
                            {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                        </ul>
                    </div>
                </Card.Body>
                <Card.Footer className='p-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Card.Text>Ratings: {recipe.ratings.number} </Card.Text>
                        <button onClick={handleAddToFavourites} className='btn fs-2'><GrAed /></button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ChefSpecialRecipes;
