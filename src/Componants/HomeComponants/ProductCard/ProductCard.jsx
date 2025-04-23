import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ item }) => {
    if (!item?.materials) return "N/A";
    const materials = item.materials;
    const firstMaterial = Object.values(materials)?.[0];
    const firstGsmGroup = Object.values(firstMaterial?.gsm || {})?.[0];
    const firstPrice = firstGsmGroup?.[0]?.price_per_piece ?? "N/A"

    return (
        <div className='space-y-2 bg-white p-4 rounded-md'>
            <img src={item?.images[0]} alt="Product" className='w-full rounded-lg shadow-md h-[250px] object-cover object-top' />
            {/* heading */}
            <p className='text-base '>{item?.name}</p>
            {/* price */}
            <p className='text-lg font-semibold'>From USD {firstPrice}</p>
            {/* button */}
            <Link to={`/productDetails/${item?._id}`}> <button className='w-full text-center border border-green-600 text-green-600 py-2 rounded-md cursor-pointer hover:bg-green-600 hover:text-white text-base'>View Details</button>
            </Link>
        </div>
    );
};

export default ProductCard;