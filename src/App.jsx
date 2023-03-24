import React from 'react';
import { Link } from 'react-router-dom';

import tailwindCSS from './assets/images/svg/tailwindcss.svg';
import react from './assets/images/svg/react.svg';

function App() {

  const links = [
    {
      title: 'Contact Template',
      path: '/contact'
    },
    {
      title: 'Princing Sections',
      path: '/pricing'
    },
    {
      title: 'Teams',
      path: '/teams'
    }
  ];

  return (
    <div 
      className='
        container max-w-3xl p-4
        grid gap-5 place-content-end
        border border-gray-200 rounded-2xl
      '
    >
      <img 
        src={tailwindCSS}
        alt="Tailwind CSS"
        className='px-20 py-5 w-96'
      />

      <ul className="grid gap-4 w-full">
        {
          links.map(link => (
            <li
              key={link.path}
              className='
                bg-gray-100 hover:scale-105
                py-5 px-14 w-full
                rounded-xl border border-gray-200
                text-xl text-center
                transition-all duration-300
              '
            >
              <Link to={link.path} >
                {link.title}
              </Link>
            </li>
          ))
        }        
      </ul>
    </div>
  )
}

export default App
