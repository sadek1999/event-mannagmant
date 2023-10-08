import React from 'react';
import { useLoaderData,useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ShowDetais = () => {
    const cards=JSON.parse(useLoaderData());
    const {id}= useParams()
    const idint=parseInt(id);
    const card=cards.find(card=>card.id===idint)
    const{img,title,details,price}=card;

    return (
        <div>
           <div>
            <Navbar></Navbar>
            <div className="card max-w-5xl space-y-2 mx-auto bg-base-100 shadow-xl mt-2 lg:mt-4">
            <figure><img className='h-96 w-full' src={img} alt="Shoes" /></figure>
            <div className="space-y-5 p-4">
                <h2 className="text-4xl font-semibold">{title}</h2>
                <p>{details}</p>
                <div className="card-actions ">
                    <button className=' bg-amber-400 rounded-md py-2 px-4 font-bold'>${price}K</button>
                    
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ShowDetais;