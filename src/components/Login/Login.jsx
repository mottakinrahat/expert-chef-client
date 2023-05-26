import React, { useContext, useState,useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../AuthProviders/AuthProviders';




const Login = () => {
    useEffect(()=>{
        document.title="AnimalFunLand|Login"
      },[])
      
    const navigate=useNavigate();
    const [error, setError] = useState('');
    const location=useLocation();
    const from=location.state?.from?.pathname ||'/';
    const {loginUser,googleSignIn,auth,googleProvider,githubSignIn,githubProvider}=useContext(AuthContext)

    const handleLogin = (e) => {
        setError('');
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        loginUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            navigate(from,{replace:true});
        })
        .catch(error=>{
              setError(error.message)
        })
    }

    const handleGoogleSignIn=()=>{
       
        googleSignIn(auth,googleProvider)
        .then(result=>{
          const googleSign=result.user;
          console.log(googleSign);
          navigate(from,{replace:true});
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    const handleGithubSignIn=()=>{
        githubSignIn(auth,githubProvider)
        .then(result=>{
            const githubSign=result.user;
            console.log(githubSign);
            navigate(from,{replace:true});
          })
          .catch(error=>{
              console.log(error.message);
          })
    }
    
   
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                  Please Sign in
                </h1>
                <form onSubmit={handleLogin} className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required/>
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        forget Password?
                    </a>

                    <p className='mt-10 text-red-700'>{error}</p>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xl font-light text-center text-gray-700">
                  Don't have an account? <Link to='/register' className='text-blue-700'>Register</Link> 
                  
                </p>

  <div className='ml-40'>
  <button onClick={handleGoogleSignIn} className="flex justify-between items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow mt-5 mb-2"><FaGoogle></FaGoogle> Sign in with Google</button> <br/>
<button onClick={handleGithubSignIn} className="flex justify-between  items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow"><FaGithub></FaGithub>
Sign in with GitHub
</button>
  </div>
  </div>

           
        </div>
    );
};

export default Login;