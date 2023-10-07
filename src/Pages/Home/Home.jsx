import React from 'react';
import Navbar from './../Navbar/Navbar';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Home = () => {
    const serves =useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    serves.map(Aserves=><Card key={Aserves.id} Aserves={Aserves}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Home;