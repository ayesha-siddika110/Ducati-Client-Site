import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useProducts = () => {
    const axiosPublic = useAxiosPublic()
    const [products, setproducts] = useState()

  useEffect(()=>{
    axiosPublic.get('/products')
    .then((res)=>{
     setproducts(res.data.reverse())
 
    })

  },[axiosPublic])
  //  console.log('products', products)
  

    
    return [products]
};

export default useProducts;