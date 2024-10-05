import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main/Main';
import Home from './layouts/Main/Page/Home/Home/Home';
import About from './layouts/Main/Page/About/About';
import PortFolio from './layouts/Main/Page/Home/Portfolio/PortFolio';
import ContactForm from './layouts/Main/Page/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>

      },
      
      {
        path:'/portfolio',
        element: <PortFolio></PortFolio>

      },
      {
        path:'/contact',
        element: <ContactForm></ContactForm>

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<div className='max-w-screen-xl m-auto'>  <RouterProvider router={router} /></div>
  </StrictMode>,
)
