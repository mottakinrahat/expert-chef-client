import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


import '@smastrom/react-rating/style.css'
import TheRecipes from '../Recipes/TheRecipes';


const SingleChefInfo = () => {
    const singleData = useLoaderData();
    const {id, name, picture, bio, likes, number_of_recipes, yearsExperience, recipes,rating } = singleData;

  

   
    return (
        <div className='px-5 mt-5'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><LazyLoad height={300} width={400} threshold={0.95}><img src={picture} alt="Album" /></LazyLoad></figure>
                <div className="card-body ml-10">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <p className='mt-5'><span className='font-semibold text-xl'>Bio:</span> {bio}</p>
                    <p><span className='font-semibold text-xl'>Likes:</span> {likes}</p>
                    <p><span className='font-semibold text-xl'>Number of Recipes:</span> {number_of_recipes}</p>
                    <p><span className='font-semibold text-xl'>Year of Experience:</span> {yearsExperience} years</p>
                    <div className="card-actions justify-end">
                    
                    </div>
                </div>
            </div>

            <section className='mt-20'>
                <h1 className='text-center text-4xl font-bold'>{name}'s Recipes</h1><hr className='mt-5' />
              <div className='flex justify-between px-20 mt-20'>
              {
                recipes.map(recipe=><TheRecipes recipe={recipe} key={recipe.recipe_id}></TheRecipes>)
              }
              </div>
            </section>
        </div>
    );
};

export default SingleChefInfo;