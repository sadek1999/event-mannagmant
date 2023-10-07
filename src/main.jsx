import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import rouths from './Routs/Rouths.jsx'
import AuthProvider from './shear/Auth/AuthProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={rouths}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
