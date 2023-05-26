import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TheRecipes = ({recipe}) => {
    const[sucess,setSuccess]=useState('');
    const [btnDisabled,setBtnDisabled]=useState(true);
    const{recipe_id,name,ingredients,cookingMethod,rating}=recipe;
     
    const handleDisableToast=(id)=>{
        console.log(id);
    if(id){
        setBtnDisabled(!btnDisabled)
         toast.success('Recipe added to favorites!')
        setSuccess('Recipe added to favorites!')
        console.log();
    }
    }
    return (
        <div>

            <div className="card w-96 drop-shadow-xl bg-slate-100">
                        <div className="card-body items-center ">
                            <h2 className="text-3xl font-bold text-center">{name}</h2>
                            <p><span className='text-xl font-semibold'>Ingredients:</span><br/>{ingredients}</p>
                            <p><span className='text-xl font-semibold'>Cooking Method:</span><br/>{cookingMethod}</p>
                            <p className='flex items-center'><span className='text-xl font-semibold'> Rating:</span>  <Rating style={{maxWidth:100 }} value={Math.round(rating || 0)} readOnly ></Rating>  {rating}</p>
                            <div className="card-actions justify-end">
                                
                            {btnDisabled?<button onClick={()=>handleDisableToast(recipe_id)}  className="btn btn-primary text-white">Favorite</button>:<button disabled className="btn btn-primary text-white">Favorite</button>}
    <ToastContainer/>
                                
                            </div>
                            <p>{sucess}</p>
                        </div>
        </div>
        </div>
    );
};

export default TheRecipes;