import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProviders/AuthProviders';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const location=useLocation();
    const navigate=useNavigate();
    const {user,loading}=useContext(AuthContext)

   
    if (loading) {
        return (<div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div> );
      }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" ></Navigate>;
};

export default PrivateRoutes;