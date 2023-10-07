
import {createBrowserRouter} from "react-router-dom";
import Main from "./Main";
import Home from '../Pages/Home/Home.jsx'
import Login from "../Pages/Home/Login";

import Singup from "../Pages/Home/Singup";
import Error from "../shear/Error";

const rouths =  createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('data.json')
        
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element:<Singup></Singup>
        },
        
      ]
    },
  ]);

export default rouths;