import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo512.png';

function PageHeader() {
  return (
    <header className="flex items-center justify-center fixed top-0 w-full h-20 z-40 border-b-2 border-gray-200 bg-gradient-to-r from-[#f5f7fa] to-[#f6f6f6]">
      <div className="flex items-center justify-between h-full w-full sm:max-w-screen-lg mx-auto px-4">
        <Link exact={true} to="/" className="inline-flex items-center space-x-2">
          <img src={logo} alt="site logo" className="h-8 sm:h-10 w-8 sm:w-10" />
          <span className="font-serif font-extrabold text-red-700">YourRecipe</span>
        </Link>
        <button className="rounded-full bg-[#f6f6f6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f6f6f6] focus:ring-red-700">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="user profile"
            className="h-8 sm:h-10 w-8 sm:w-10 rounded-full"
          />
        </button>
      </div>
    </header>
  );
}

export default PageHeader;
