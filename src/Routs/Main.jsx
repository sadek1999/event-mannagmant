import React from 'react';
import { Outlet } from 'react-router-dom';
import auth from './../firebase/firebase.config';

const Main = () => {
    return (
        <div className='max-w-[1280px] mx-auto p-2'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;