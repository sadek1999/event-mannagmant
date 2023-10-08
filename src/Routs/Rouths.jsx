
import {createBrowserRouter} from "react-router-dom";
import Main from "./Main";
import Home from '../Pages/Home/Home.jsx'
import Login from "../Pages/Home/Login";

import Singup from "../Pages/Home/Singup";
import Error from "../shear/Error";
import ShowDetais from "../Pages/Home/ShowDetais";
import Priivate from "../Pages/private/Priivate";
import Aboutus from "../Pages/About/Atoutus";
import Contact from "../Pages/contact/Contact";

const rouths =  createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
         
        
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element:<Singup></Singup>
        },
        {
          path:'/show/:id',
          element:<Priivate><ShowDetais></ShowDetais></Priivate>,
          loader:()=>fetch('https://raw.githubusercontent.com/sadek1999/auth-1/main/public/data.json')
        
        },
        {
            path:'/about',
            element:<Aboutus></Aboutus>
           
            
        }
        ,
        {
            path:'/contact',
            element:<Priivate><Contact></Contact></Priivate>
        }
       
        
      ]
    },
  ]);

export default rouths;