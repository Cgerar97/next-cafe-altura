import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/Context';
import { ProductsCards } from './ProductsCards';
const ProductTable = () => {
    const { productsArray,cart } = useContext(ProductContext);
  return (
    <div className='w-[792px] h-[415.32px] p-2 gap-6 bg-black'>
        {/* {cart.map((products)=>{
          return (<div key={products._id}>
           {products.img_url}
           {products.brand}
            {products.price}
           {products}
             
              
          </div>
);
        })



        } */}
        
        
        
       





    </div>
  )
}

export default ProductTable