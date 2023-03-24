import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <ul className="">
      <li>
        <Link to='/contact' >
          Contact Template
        </Link>
      </li>

      <li>
        <Link to='/pricing' >
          Pricing Sections
        </Link>
      </li>
    </ul>
  )
}

export default App
