"use client";
import React from 'react'
import ProductTable from '../componentes/ProductTable';
import TotalCarrito from '../componentes/TotalCarrito';
const Cesta = () => {
  return (

      <div className=' w-[1,200px] h-[722px] p-10 flex gap-6 bg-red-600 items-center self-stretch'> 
        
        <ProductTable/>
        <TotalCarrito/>





    </div>
  )
}

export default Cesta