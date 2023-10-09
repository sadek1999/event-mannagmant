import React from 'react';
import Navbar from '../Navbar/Navbar';

const Aboutus = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-full w-full rounded-md  ">


                <div className=" w-full max-h-96  space-y-3  items-center bg-no-repeat bg-cover  
              bg-[url(https://i.ibb.co/0t5CKLV/Screenshot-2023-10-08-225404.png)]">

                    <div className=" w-full h-96  bg-[#000000A0] flex items-center ">
                        <div className=" mx-auto space-y-4  ">
                            <h1 className="uppercase mx-auto w-96 text-4xl md:text-6xl font-bold text-center text-white border-b-2 pb-2 border-[#FD6E0A] ">About us</h1>

                            <div>
                        <p className='text-white font-semibold text-center text-2xl'>Crafting unforgettable experiences is our passion. <br /> At E M C we turn your visions into seamless, breathtaking events. <br /> Let's make memories together</p>
                        </div>
                             
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;