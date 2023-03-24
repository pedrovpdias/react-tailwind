import React from 'react'
import ReactDOM from 'react-dom/client'

import Routes from './Routes'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='grid gap-20 p-20 place-content-center w-full min-h-screen'>
      <Routes />
    </div>
  </React.StrictMode>,
)
