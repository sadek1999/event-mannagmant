import React from 'react';
import { useLoaderData,useParams } from 'react-router-dom';

const ShowDetais = () => {
    const cards=useLoaderData();
    const {id}= useParams()
    const idint=parseInt(id);
    const card=cards.find(card=>card.id===idint)
    const{img,title,details}=card;

    return (
        <div>
           <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-96 w-full' src={img} alt="Shoes" /></figure>
            <div className="">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions ">
                    
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ShowDetais;