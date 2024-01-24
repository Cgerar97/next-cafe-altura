import React from 'react'
import { HeroImage } from './HeroImage'
import { HeroContent } from './HeroContent'
import feature from '../../Assets/Hero image.jpg'
import { Content } from './Content'
export const FeatureSection = () => {
    return (
        <div className='w-[1,280px] h-[480px] bg-white flex  items-center justify-between px-10 '>
            <div className=' h-[116px] gap-4'>
                <Content  h2={"Pruébalo en nuestro coffee shop"}  />
                <Content   paragraf={"Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento"} /> 
            </div>
            <HeroImage className="rounded just  " img={feature} w={588} h={390} />
        </div>
    )
}
