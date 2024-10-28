import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from './Home.jsx';
import LayoutAdmin from './admin/LayoutAdmin.jsx';
import GestionProductosIndex from './admin/productos/Index.jsx';
import FormProducto from './admin/productos/FormProducto.jsx';
import './index.css'
import Dashboard from './admin/Dashboard.jsx';

axios.defaults.baseURL = 'http://localhost:3000';
//axios.defaults.baseURL = 'https://libros-arg.com';
/* axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
axios.defaults.headers.common['Content-Type'] = 'application/json'; */


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/admin",
        exact: true,
        element: <LayoutAdmin />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "productos",
                element: <GestionProductosIndex />,
            },
            {
                path: "productos/:id",
                element: <FormProducto />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
