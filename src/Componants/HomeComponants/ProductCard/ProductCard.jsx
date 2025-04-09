import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ img }) => {
    return (
        <div className='space-y-2 bg-white p-4 rounded-md'>
            <img src={img} alt="Product" className='w-full rounded-lg shadow-md h-[250px] object-cover object-top' />
            {/* heading */}
            <p className='text-base '>Hot Selling Women’s Singlet With Photo Board</p>
            {/* price */}
            <p className='text-lg font-semibold'>From USD 3.35</p>
            {/* button */}
            <Link to="/productDetails"> <button className='w-full text-center border border-green-600 text-green-600 py-2 rounded-md cursor-pointer hover:bg-green-600 hover:text-white text-base'>View Details</button>
            </Link>
        </div>
    );
};

export default ProductCard;