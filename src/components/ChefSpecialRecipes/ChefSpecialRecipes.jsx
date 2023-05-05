/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { GrAed } from "react-icons/gr";
import { HiStar} from "react-icons/hi";
import { BsStarHalf } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillHeart } from "react-icons/ai";
import './ChefSpecialRecipes.css'

const ChefSpecialRecipes = ({ recipe }) => {
    const ingredients = recipe.ingredients;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFavorites = () => {
        if (isFavorite) {
          toast.error('Recipe already added to favorites!');
        } else {
          setIsFavorite(true);
          toast.success('Recipe added to favorites!');
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
            <Card style={{height:'900px'}}>
                <Card.Img style={{height:'240px'}} variant="top" src={recipe.photo_url} />
                <Card.Body>
                    <Card.Title className='mt-4' style={{textAlign:'left'}}><span style={{color:'orange',fontWeight:'800'}}>{recipe.recipe_title}</span></Card.Title>
                    <div className='mt-3'>
                        <h6 style={{textAlign:'left'}}><span style={{color:'green',fontWeight:'700'}}>Ingredients:</span></h6>
                        <ul className='text-center ps-5'>
                            {ingredients.map(ingredient => <p className='p-0 m-0' style={{textAlign:'left'}} key={ingredient}>{ingredient}</p>)}
                        </ul>
                    </div>
                    <Card.Text style={{textAlign:'left'}}> <span style={{color:'green',fontWeight:'700'}}>Cooking Method:</span> {recipe.cooking_method} </Card.Text>
                    <Card.Text style={{textAlign:'left'}}><span style={{color:'green',fontWeight:'700'}}>Experience:</span> {recipe.yearsOfExperience} Years </Card.Text>
                </Card.Body>
                <Card.Footer className='p-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Card.Text style={{color:'orange'}}> <span style={{color:'black'}}>Ratings:</span> <HiStar></HiStar><HiStar></HiStar><HiStar></HiStar><HiStar></HiStar> <BsStarHalf></BsStarHalf> {recipe.ratings.number} </Card.Text>
                        <button disabled={isFavorite} onClick={handleAddToFavorites} className='btn fs-1' style={{border:'none'}} ><AiFillHeart  style={{ color: isFavorite ? 'red' : 'black' }}></AiFillHeart></button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ChefSpecialRecipes;
