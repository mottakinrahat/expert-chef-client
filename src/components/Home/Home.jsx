import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../chefCard/chefCard';
import LazyLoad from 'react-lazy-load';

const Home = () => {
  const chefInformation = useLoaderData();
 
  return (
    <div className='px-10'>
      <div className="relative h-screen">
        <img src="/background Image.jpg" alt="Background" className="w-full h-[600px]  object-cover" />
        <div className="absolute top-0 left-0 w-full h-[600px]  bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="lg:flex lg:items-center">
              <div className="lg:w-1/2 mx-20">
                <h1 className="text-5xl font-bold text-white mb-4 ">Authentic Thai <span className='text-success'>Flavors</span><br /> <span className='text-info'>Experience</span> Tradition <br /> with  <span className='text-warning'>ThaiKitchen</span></h1>
                <p className="text-lg text-white mt-10">Discover the Best of Thai Cuisine: Savory, Spicy, and Delicious at Thai Kitchen.Explore our menu and enjoy traditional dishes made with fresh ingredients and bold flavors. Come dine with us today!</p>
              </div>
              <div className="lg:w-1/2">
                <img src="/THAI SHEF.png" alt="Picture" className="w-full h-[600px] pr-20 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className=' text-4xl font-bold text-center mb-10'>Chef Information</h1>
      <div className='md:grid grid-cols-3'>
        {
          chefInformation.map(chef => <ChefCard chef={chef} key={chef.id}></ChefCard>)
        }
      </div>

      <section className='mt-20'>
        <h1 className='text-4xl text-center font-bold'>Some Thai Recipes</h1><hr className='mt-5' />
        <div className='mt-10 md:flex justify-between px-20'>
          <div><img src="/green_curry_chicken.png" className='h-80 border rounded-full' alt="" /> <h2 className='text-2xl ml-10 font-bold'>Green Curry Chicken</h2></div>
          <div><img src="/khao soi.png" className='h-80 border rounded-full' alt="" /> <h2 className='text-2xl ml-[120px] font-bold'>Khao soi</h2></div>
          <div><img src="/Screenshot 2023-05-02 195420.png" className='h-80 border rounded-full' alt="" /> <h2 className='text-2xl ml-20 font-bold'>Thai Basil Pork</h2></div>
          <div><img src="/tom yum final.jpg" className='h-80 border rounded-full' alt="" /> <h2 className='text-2xl ml-40 font-bold'>Tom Yum</h2></div>

        </div>
      </section >

      <section className='mt-20'>
        <h1 className='text-4xl text-center font-bold'>Customer Food Review</h1><hr className='mt-5' />

        <div className='md:flex justify-between'>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="/green_curry_chicken.png" alt="Shoes" /></figure>
            <div className="card-body">
              <img src="/Thai people 1.png" className='h-[100px] w-[120px] border rounded-full' alt="" />
              <h2 className="card-title">Vachirawit Chivaaree</h2>
              <p><span className='font-bold'>Green Thai Curry Chicken Review:</span>As a customer, I recently tried the green Thai curry chicken dish and it was absolutely delicious! The curry had the perfect blend of spices and the chicken was cooked to perfection. I highly recommend this dish to anyone looking for a flavorful and satisfying meal.</p>
              <div className="card-actions justify-end">
          
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="/khao soi.png" alt="Shoes" /></figure>
            <div className="card-body">
            <img src="/Thai people 3.png" className='h-[100px] w-[120px] border rounded-full' alt="" />
              <h2 className="card-title">Suvanant Kongying</h2>
              <p><span className='font-bold'>Khao soi Review:</span> As a customer, I recently had the pleasure of trying the Khao Soi dish and it was a truly amazing experience! The combination of flavors and textures in this dish was outstanding and left me feeling satisfied and happy. Highly recommend giving this dish a try!</p>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="/Screenshot 2023-05-02 195420.png" alt="Shoes" /></figure>
            <div className="card-body">
            <img src="/Thai people -2.png" className='h-[100px] w-[120px] border rounded-full' alt="" />
              <h2 className="card-title">Thiti Mahayotaruk</h2>
              <p><span className='font-bold'>Thai Basil Pork Review:</span> As a customer, I recently tried the Thai Basil Pork dish and it was simply amazing! The blend of savory pork and aromatic basil in a spicy sauce was a flavor explosion in my mouth. I highly recommend this dish to anyone looking for an authentic and delicious Thai food experience. Definitely a must-try!</p>
              <div className="card-actions justify-end">
        
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="/tom yum final.jpg" alt="Shoes" /></figure>
            <div className="card-body">
            <img src="/Thai people 4.png" className='h-[100px] w-[120px] border rounded-full' alt="" />
              <h2 className="card-title">Davika Hoorne </h2>
              <p><span className='font-bold'>Tom Yum Review:</span> As a customer, I recently tried the Tom Yum soup and it was a true delight! The perfect balance of spicy, sour, and savory flavors in the soup was refreshing and satisfying. If you're a fan of Thai cuisine, you definitely don't want to miss out on this dish. Highly recommended!</p>
              <div className="card-actions justify-end">
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;