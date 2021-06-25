import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-black  items-center bg-gray-900 '
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link  to='/' className='p-4 hover:bg-black text-white transition rounded-cover duration-300 ease-in-out'>
        Home
      </Link>
      <Link to='/profile' className='p-4 hover:bg-black text-white transition rounded-cover duration-300 ease-in-out'>
        Profile
      </Link>
      <Link to='/login' className='p-4 hover:bg-black text-white transition rounded-cover duration-300 ease-in-out'>
        Login
      </Link>
      <Link to='/cart' className='p-4 hover:bg-black text-white transition rounded-cover duration-300 ease-in-out'>
        Cart
      </Link>
    </div>
  );
};

export default Dropdown;