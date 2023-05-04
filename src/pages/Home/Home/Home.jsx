/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import RecipeCarousel from '../../RecipeCarousel/RecipeCarousel';
import TopChef from '../../../components/TopChef/TopChef';

import { Spinner } from 'react-bootstrap';
import ContactSection from '../../../components/ContactSection/ContactSection';
import CustomerReview from '../../../components/CustomerReview/CustomerReview';
import UsRecipe from '../../../components/UsRecipe/UsRecipe';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(false);
    }, []);
    return (
        <div className='text-center'>
        {isLoading ? (
          <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      </div>
        ) : (
          <>
            <UsRecipe></UsRecipe>
            <RecipeCarousel />
            <TopChef />
            <CustomerReview></CustomerReview>
            <ContactSection></ContactSection>
          </>
        )}
      </div>
    );
};

export default Home;