import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({chef}) => {
    const {id,name,picture,yearsExperience,likes,number_of_recipes}=chef;
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl mb-5 object-cover ">
  <figure className="px-10 pt-10 object-cover">
   <LazyLoad height={200} offset={300} threshold={0.95}>
   <img src={picture} alt="Shoes" className="rounded-xl object-cover" />
   </LazyLoad>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p><span className='font-semibold'>Years of experience:</span> {yearsExperience} years</p>
    <p><span className='font-semibold'>Numbers of recipes:</span> {number_of_recipes} recipes</p>
    <p><span className='font-semibold'>Likes:</span> {likes}</p>
    <div className="card-actions">
      <Link to={`/chefInfo/${id}`}> <button className="btn btn-primary w-80 text-white">View Recipes</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCard;