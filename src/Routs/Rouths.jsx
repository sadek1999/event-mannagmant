
import {createBrowserRouter} from "react-router-dom";
import Main from "./Main";
import Home from '../Pages/Home/Home.jsx'

const rouths =  createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);

export default rouths;