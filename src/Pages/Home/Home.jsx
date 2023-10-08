import React, { useEffect, useState } from 'react';
import Navbar from './../Navbar/Navbar';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Footer from './Footer';
import Blogs from './Blogs';


const Home = () => {
    
    const [serves,setserves]=useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/sadek1999/auth-1/main/public/data.json')
        .then(res=>res.json())
        .then(data=>setserves(data))
    },[])
    return (
        <div className=''>
            <Navbar></Navbar>
            
            <Banner></Banner>
            <Blogs></Blogs>
            <div className='mt-3 '>
                <h1 className='p-2 text-center text-4xl font-semibold'>Our Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    serves.map(Aserves=><Card key={Aserves.id} Aserves={Aserves}></Card>)
                }
            </div>
            
           
            
             
               
            
            <div>
                <h1 className='text-4xl font-bold uppercase text-center p-3'>Our lasts events</h1>
            </div>
            
            <div>
                <h1 className='text-4xl font-bold uppercase text-center p-3'>meet out team </h1>
            </div>
            
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;