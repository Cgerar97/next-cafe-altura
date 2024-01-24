import { ProductsCards } from './ProductsCards'
import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/Context';
import CostaRica from '../../Assets/Images.jpg'
import Colombia from '../../Assets/Images (1).jpg'
import Amanecer from '../../Assets/Images (2).jpg'
import Etiopia from '../../Assets/Images (3).jpg'
export const IntemsProductsCards = () => {
  const { productsArray } = useContext(ProductContext);
  
  return (
    <div className='min-w-[1280px] m-h-[604px] p-[40px] gap-10 bg-white flex flex-col items-center justify-center'>
      <div className='cardWraper flex gap-6 text-center'>
        {productsArray?.slice(0, 4).map((products) => {
          return (
            <div key={products._id}>
              <ProductsCards
                img={products.img_url}
                nameProduct={products.brand}
                price={products.price}
                cafeInfo={products}
                />
            </div>
          );
        })}
      </div>

      ir a otros prub
    </div>
  )
}
