import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ImOffice } from "react-icons/im";

const Contact = () => {
    return (
        <div className='space-y-3'>
            <Navbar></Navbar>
            <div className="h-full w-full rounded-md  ">


                <div className=" w-full h-80  space-y-3  items-center bg-no-repeat bg-cover  
              bg-[url(https://i.ibb.co/0t5CKLV/Screenshot-2023-10-08-225404.png)]">

                    <div className=" w-full h-80  bg-[#000000A0] flex items-center ">
                        <div className=" mx-auto  ">
                            <h1 className="uppercase text-4xl md:text-6xl font-bold text-center text-white border-b-2 pb-2 border-blue-600 ">Contract us</h1>
                        </div>
                    </div>
                </div>
            </div>
       
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
       <div className="card card-compact w-full bg-green-500 shadow-xl">
                
                <div className="card-body items-center text-white">
                    <p className='text-4xl  '><FiPhoneCall></FiPhoneCall></p>
                    <h2 className="card-title text-3xl">Phone</h2>
                    <p className='text-xl'>(+001)2594-154-159</p>
                    
                </div>
            </div>

            <div className="card card-compact w-full bg-blue-600 shadow-xl">
                
                <div className="card-body items-center text-white">
                    <p className='text-4xl  '><HiOutlineMailOpen></HiOutlineMailOpen></p>
                    <h2 className="card-title text-xl">Mail</h2>
                    <p className=' text-3xl'>inform@dvents.com</p>
                    
                </div>
            </div>

            <div className="card card-compact w-full bg-green-400 shadow-xl">
                
                <div className="card-body items-center text-white">
                    <p className='text-4xl  '><ImOffice></ImOffice></p>
                    <h2 className="card-title text-xl ">Address</h2>
                    <p className=' text-2xl'> Hilton Street, California</p>
                    
                </div>
            </div>

       </div>

            


        </div>
    );
};

export default Contact;