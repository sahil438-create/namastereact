import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import myimage from './download.jpg';
import Header from './components/header';
import Body from './components/Body';
import Error from './error';
import Contact from './Contact';
import Resinfo from './Resinfo';
import Restmenu from './Restmenu';
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
const Grocery = lazy(() => import('./components/Grocery'));

const Applayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>this is about</h1>
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: '/about',
        element: <About />,
      },

      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Grocery',
        element: (
          <Suspense fallback={<h1>Loading.........</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: '/',
        element: <Body />,
      },

      {
        path: '/Home',
        element: <Body />,
      },
      {
        path: '/:ResName/:resid',
        element: <Restmenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter} />);
