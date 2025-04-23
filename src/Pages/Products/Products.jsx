import React, { useEffect, useState } from 'react';
import ProductCard from '../../Componants/HomeComponants/ProductCard/ProductCard';
import img from '../../assets/products/img3.jfif'
import HeadingPara from '../../Componants/Share/HeadingPara';
import useProducts from '../../Hooks/useProducts';
const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("all");
    const [products] = useProducts()

  

    // const data = [
    //     {
    //       "product_id": "TSHIRT001",
    //       "name": "Basic T-Shirt",
    //       "materials": {
    //         "cotton": {
    //           "gsm": {
    //             "100": [
    //               { "min": 1, "max": 1999, "price_per_piece": 3.00 },
    //               { "min": 2000, "max": 4999, "price_per_piece": 2.80 },
    //               { "min": 5000, "max": null, "price_per_piece": 2.60 }
    //             ],
    //             "120": [
    //               { "min": 1, "max": 1999, "price_per_piece": 3.20 },
    //               { "min": 2000, "max": 4999, "price_per_piece": 3.00 },
    //               { "min": 5000, "max": null, "price_per_piece": 2.80 }
    //             ]
    //           }
    //         },
    //         "polyester": {
    //           "gsm": {
    //             "100": [
    //               { "min": 1, "max": 1999, "price_per_piece": 2.70 },
    //               { "min": 2000, "max": 4999, "price_per_piece": 2.50 },
    //               { "min": 5000, "max": null, "price_per_piece": 2.30 }
    //             ]
    //           }
    //         }
    //       }
    //     },
    //     {
    //       "product_id": "HOODIE001",
    //       "name": "Pullover Hoodie",
    //       "materials": {
    //         "cotton": {
    //           "gsm": {
    //             "240": [
    //               { "min": 1, "max": 999, "price_per_piece": 10.00 },
    //               { "min": 1000, "max": 4999, "price_per_piece": 9.00 },
    //               { "min": 5000, "max": null, "price_per_piece": 8.50 }
    //             ]
    //           }
    //         },
    //         "blend": {
    //           "gsm": {
    //             "220": [
    //               { "min": 1, "max": 999, "price_per_piece": 9.00 },
    //               { "min": 1000, "max": 4999, "price_per_piece": 8.00 },
    //               { "min": 5000, "max": null, "price_per_piece": 7.50 }
    //             ]
    //           }
    //         }
    //       }
    //     },
    //     {
    //       "product_id": "POLO001",
    //       "name": "Classic Polo Shirt",
    //       "materials": {
    //         "cotton": {
    //           "gsm": {
    //             "200": [
    //               { "min": 1, "max": 999, "price_per_piece": 6.00 },
    //               { "min": 1000, "max": 4999, "price_per_piece": 5.50 },
    //               { "min": 5000, "max": null, "price_per_piece": 5.00 }
    //             ]
    //           }
    //         },
    //         "polyester": {
    //           "gsm": {
    //             "180": [
    //               { "min": 1, "max": 999, "price_per_piece": 5.50 },
    //               { "min": 1000, "max": 4999, "price_per_piece": 5.00 },
    //               { "min": 5000, "max": null, "price_per_piece": 4.70 }
    //             ]
    //           }
    //         }
    //       }
    //     },
    //     {
    //       "product_id": "SHORTS001",
    //       "name": "Casual Shorts",
    //       "materials": {
    //         "blend": {
    //           "gsm": {
    //             "160": [
    //               { "min": 1, "max": 999, "price_per_piece": 4.00 },
    //               { "min": 1000, "max": 4999, "price_per_piece": 3.70 },
    //               { "min": 5000, "max": null, "price_per_piece": 3.50 }
    //             ]
    //           }
    //         }
    //       }
    //     },
    //     {
    //       "product_id": "TRACK001",
    //       "name": "Tracksuit Set",
    //       "materials": {
    //         "polyester": {
    //           "gsm": {
    //             "260": [
    //               { "min": 1, "max": 999, "price_per_piece": 15.00 },
    //               { "min": 1000, "max": 4999, "price_per_piece": 14.00 },
    //               { "min": 5000, "max": null, "price_per_piece": 13.00 }
    //             ]
    //           }
    //         }
    //       }
    //     }
    //   ]
      
    return (
        <div className='bg-[#F7F7F7]'>
            <div className='w-[90%] max-w-[1440px] m-auto'>
               <HeadingPara heading={"Special offers for selling"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero dolor vitae enim ipsum delectus dolore harum rem magnam deleniti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, possimus."}></HeadingPara>
                {/* search and filter */}
                <div className="  py-10 rounded-lg  flex flex-col md:flex-row items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative w-full md:w-2/3">
                        <p className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products, categories, etc..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Filter Dropdown */}
                    <div className="w-full md:w-1/3 relative">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full py-2 pl-3 pr-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                        >
                            <option value="all">Filter products</option>
                            <option value="software">Software</option>
                            <option value="tech">Technology</option>
                            <option value="it">IT & Security</option>
                            <option value="ideas">Idea Generation</option>
                        </select>
                        <p className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4 '>
                    {
                        products?.map((product, index)=><ProductCard item={product} ></ProductCard>)
                    }

                    
                  
                </div>
            </div>
        </div>
    );
};

export default Products;