import React from 'react'
import { FAQ } from './FAQ'
export const FAQWrapper = () => {
    return (
        <div className='w-[1,280px] h-[621px]  py-[48px, 366px] px-[48px, 366px] bg-green-900 flex justify-center items-center gap-6 justify-self-stretch  '>
            <div className='w-[688px] h-[425px] flex flex-col  gap-4   '>
                <FAQ h3={"¿Cómo hago el pedido?"} paragraf={"Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café."} />
                <FAQ h3={"¿Por qué los precios son tan bajos?"} paragraf={"porque somos los mejores proveedores de la zona djdhfjh whit yet and anoyher else because true flase"} />
                <FAQ h3={"¿Es posible enviar café a mi oficina?" } paragraf={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil voluptatum, voluptatem tempore cum vero quibusdam magni."} />
            </div>
        </div>
    )
}
