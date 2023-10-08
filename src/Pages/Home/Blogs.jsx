import React from 'react';
import { FaBeer, FaSlackHash } from 'react-icons/fa';

const Blogs = () => {
    return (
        <div className=' w-full bg-purple-300'>
            <p className='text-center font-semibold'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,<br />
                We offer full range of Events Management Services that scale to your needs & budget.</p>
            <div className='flex gap-3'>
                

                <div className=''>
                    <div className='flex'>
                        <p className='text-4xl'><FaSlackHash></FaSlackHash></p>
                        <h1>Great Services</h1>
                    </div>
                    <p>Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation</p>
                </div>
                <div className=''>
                    <div className='flex'>
                        <p className='text-4xl'><FaSlackHash></FaSlackHash></p>
                        <h1>Great people</h1>
                    </div>
                    <p>Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation</p>
                </div>
                <div className=''>
                    <div className='flex'>
                        <p className='text-4xl'><FaSlackHash></FaSlackHash></p>
                        <h1>Great Ideas</h1>
                    </div>
                    <p>Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation</p>
                </div>
            </div>


        </div>
    );
};

export default Blogs;