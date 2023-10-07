import React from 'react';

const Card = ({Aserves}) => {
    const{img,title,id,details}=Aserves;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-56 w-full' src={img} alt="Shoes" /></figure>
            <div className="">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0,80)}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Card;