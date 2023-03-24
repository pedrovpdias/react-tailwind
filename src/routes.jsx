import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Components
import Princing from './components/Pricing';

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
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}
