import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../components/Home/Home';
import SingleChefInfo from '../components/SingleChefInfo/SingleChefInfo';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import PrivateRoutes from './PrivateRoutes';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Blog from '../components/Blog/Blog';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
               loader:()=>fetch('https://assignment-10-expert-chef-server-mottakinrahat.vercel.app/chefInfo')
            },
            {
                path: '/chefInfo/:id',
                element:<PrivateRoutes><SingleChefInfo></SingleChefInfo></PrivateRoutes>,
               loader:({params})=>fetch(`https://assignment-10-expert-chef-server-mottakinrahat.vercel.app/chefInfo/${params.id}`)
            },
            {
                path: '/login',
                element:<Login></Login>,
              
            },
            {
                path: '/register',
                element:<Register></Register>,
               
            },
            {
                path: '/blog',
                element:<Blog></Blog>,
               
            },
           
        ]
    }
])


export default router;