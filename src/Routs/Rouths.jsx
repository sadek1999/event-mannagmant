
import {createBrowserRouter} from "react-router-dom";
import Main from "./Main";
import Home from '../Pages/Home/Home.jsx'
import Login from "../Pages/Home/Login";
import Singin from "../Pages/Home/Singup";
import Singup from "../Pages/Home/Singup";

const rouths =  createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        
      ]
    },
  ]);

export default rouths;