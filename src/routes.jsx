import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Components
import Princing from './components/Pricing';
import Teams from './components/Teams';

//Pages
import App from './App';
import Contact from './pages/Contact';

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/pricing',
            element: <Princing />
        },
        {
            path: '/teams',
            element: <Teams />
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}
