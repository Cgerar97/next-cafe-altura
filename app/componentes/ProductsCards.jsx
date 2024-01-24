import Button from './Button';
import Image from 'next/image'
import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/Context';

export const ProductsCards = ({ img, nameProduct, price, cafeInfo }) => {
    const { dispatch } = useContext(ProductContext)
    const handleClickAdd = (product) => {
        
        dispatch({
            action: "ADD_ITEM",
            payload: product
        })
    }
  

    return (
        <div className='flex flex-col w-[282px] h-[391.39px] rounded-lg border border-[#E3DED7] p-6 gap-6   '>
            <div> < Image
                src={img}
                alt=''
                width={588}
                height={588}
            />
            </div>
            <div className='flex-col gap-3'><p>{nameProduct}  </p>
                <p>{price}</p>
            </div>
            <Button funcion={()=>handleClickAdd(cafeInfo)}>
                Añadir
            </Button>
        
        </div>
    )
}
