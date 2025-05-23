import React from 'react';
import Heading from '../../Heading/Heading';
import img1 from "../../../assets/products/008ea2391635532bb7bdc0e6b7f7d950.png"
import img2 from "../../../assets/products/6bb4fb4dd5ba00bbca4e7e8195b5c329.png"
import ProductCard from '../ProductCard/ProductCard';
import useProducts from '../../../Hooks/useProducts';


const TrendProducts = () => {
    const [products] = useProducts()
    const data = products?.slice(0,8)
    return (
        <div className='bg-[#F7F7F7] my-10'>
            <div className='py-10 w-[90%] max-w-[1440px]  m-auto'>

                <Heading heading="On-Trend Clothing Products" paragraph="High Specifications from Start to End"></Heading>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
                    {
                        data?.map((item)=>
                            <ProductCard item={item}></ProductCard>
                        )
                    }

               
                    
                  
                  

                </div>
            </div>

        </div>
    );
};

export default TrendProducts;