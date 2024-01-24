'use client'
import { Card } from '../componentes/Card'
import iconCheck from '../../Assets/CHECk.jpg'
import camnionIncon from '../../Assets/CamionIcon.jpg'
import iconGift from '../../Assets/IconGift.jpg'
import Footer from '../Footer/page'
import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/Context';
import { ProductsCards } from '../componentes/ProductsCards'
const Tienda = () => {
  const { productsArray } = useContext(ProductContext);

  return (

<>

      <div className='w-[1,280px] h-[939px] bg-red-700   '>
        <div className='cardWraper flex flex-wrap gap-6 text-center'>
          {productsArray.map((products) => {
            return (
              <div  key={products._id}>
                <ProductsCards
                  img={products.img_url}
                  nameProduct={products.brand}
                  price={products.price} />
              </div>
            );
          })}
        </div>





    </div>
      <div>
        <div className='w-[1,280px] h-[380px] px-12 py-20 gap-6  bg-fondo-card   bg-cover flex justify-center   ' >
          <Card icon={iconCheck} h3="Recibe tu pedido sin preocuparte" paragraph="Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana. " />
          <Card icon={camnionIncon} h3="Envío en 24/48h" paragraph="Pide tu café antes de las 12h y lo recibirás al día siguiente." />
          <Card icon={iconGift} h3="Descuentos y beneficios" />
        </div>
      </div>
      <Footer/>
</>


  )
}

export default Tienda