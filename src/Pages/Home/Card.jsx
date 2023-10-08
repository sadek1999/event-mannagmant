import React from 'react';
import { Link } from 'react-router-dom'
import ShowDetais from './ShowDetais';

const Card = ({Aserves}) => {
    const{img,title,id,details}=Aserves;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-56 w-full' src={img} alt="Shoes" /></figure>
            <div className=" space-y-3 p-2">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0,80)}</p>
                <div className="card-actions ">
                    <Link to={`/show/${id}`}> <button className='btn bg-emerald-200 text-[#FD6E0A]'> Show Details</button> </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Card;