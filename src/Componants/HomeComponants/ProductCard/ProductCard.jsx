import React from 'react';

const ProductCard = ({img}) => {
    return (
        <div  className='space-y-2 bg-white p-4 rounded-md'>
                                <img src={img} alt="Product" className='w-full rounded-lg shadow-md h-[250px] object-cover object-top' />
                                {/* heading */}
                                <p className='text-base '>Hot Selling Women’s Singlet With Photo Board</p>
                                {/* price */}
                                <p className='text-lg font-semibold'>From USD 3.35</p>
                                {/* button */}
                                <button className='w-full text-center border border-green-600 text-green-600 py-2 rounded-md cursor-pointer hover:bg-green-600 hover:text-white text-base'>View Details</button>
                            </div>
    );
};

export default ProductCard;