/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ChefRecipe = () => {
    const data = useLoaderData();
console.log(data)
    return (
        <div className='text-center mt-5'>
            <h3>{data.chefName}</h3>
        </div>
    );
};

export default ChefRecipe;