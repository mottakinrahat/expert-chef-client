import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon,Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/solid'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { AuthContext } from '../AuthProviders/AuthProviders';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
 
    const {user,logOut}=useContext(AuthContext)
    console.log(user);

    const handleLogOut=()=>{
      logOut()
      .then()
      .catch(error=>{
        console.log(error.message);
      })
    }
   
    return (
        <div className='bg-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-100'>
        <div className='relative flex items-center justify-between'>
       
          <Link to='/' className='inline-flex items-center'>
            
            <span className='ml-2 text-3xl font-bold tracking-wide text-gray-800'>
             ThaiKitchen
            </span>
          </Link>
  
         
          <ul className='items-center hidden space-x-8 lg:flex'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
              >
               Home
              </NavLink>
              </li>
            <li>
              <NavLink
                to='/blog'
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <div className='flex gap-2 items-center'>
           <Tooltip id="my-tooltip" />
          
            {user && <img src={user.photoURL} className='h-[45px] border rounded-full' data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} alt=""/>} 
           {user? <button onClick={handleLogOut} className='btn btn-primary text-white'>Log Out</button>:<Link to='/login'> <button className='btn btn-primary text-white'>Log in</button></Link>}
          </div>
          {/* Mobile Navbar Section */}
          <div className='lg:hidden'>
            {/* Dropdown Open Button */}
            <button
              aria-label='Open Menu'
              title='Open Menu'
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className='w-5 text-gray-600' />
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full z-10'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  {/* Logo & Button section */}
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <Link to='/' className='inline-flex items-center'>
                       
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          HuntYourJob
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className='w-5 text-gray-600' />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <Link to='/' className='default'>
                          home
                        </Link>
                      </li>
                     
                      <li>
                        <Link
                          to='/blog'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;