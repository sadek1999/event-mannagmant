import React, { useEffect, useState } from 'react';
import Navbar from './../Navbar/Navbar';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Footer from './Footer';
import Blogs from './Blogs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Clinds from './Clinds';


const Home = () => {


    const [serves, setserves] = useState([])

    useEffect(() => {
        Aos.init()
    }, [])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sadek1999/auth-1/main/public/data.json')
            .then(res => res.json())
            .then(data => setserves(data))
    }, [])
    return (
        <div className=''>
            <Navbar></Navbar>

            <Banner></Banner>
            <Blogs></Blogs>
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className='my-5 '>
                <h1 className='p-2 text-center text-4xl font-semibold md:mb-6'>Our Services</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        serves.map(Aserves => <Card key={Aserves.id} Aserves={Aserves}></Card>)
                    }
                </div>
            </div>

            <Clinds></Clinds>

            <Footer></Footer>

        </div>
    );
};

export default Home;