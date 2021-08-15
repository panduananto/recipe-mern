import React from 'react';

function NavigationBar() {
  const navigationItem = [
    {
      text: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      link: '#',
    },
    {
      text: 'Add Recipe',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      link: '#',
    },
    {
      text: 'Account',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      link: '#',
    },
  ];

  return (
    <nav className="flex items-center justify-center fixed bottom-0 w-full h-20 z-40 border-t-2 border-gray-200 bg-white">
      <div className="flex items-center justify-center h-full w-full sm:max-w-screen-lg mx-auto px-4">
        <ul className="flex items-center justify-evenly w-full">
          {navigationItem.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="inline-flex flex-col items-center justify-center space-y-1 text-center text-gray-500 hover:text-red-900"
              >
                {item.icon}
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
