import React, { useContext } from 'react';
import { authContext } from '../../shear/Auth/AuthProvider';
import { Navigate,useLocation} from 'react-router-dom';

const Priivate = ({children}) => {
    const{user,loding}=useContext(authContext)
    const location =useLocation()
    console.log(location.pathname)

if(loding){
    return <span className="loading loading-spinner mx-auto loading-lg"></span>
    
}
    if(user){
        return children
    }
    return<Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Priivate;