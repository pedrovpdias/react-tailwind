import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}
