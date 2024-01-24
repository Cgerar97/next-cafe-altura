import React from 'react'
import { HeroContent } from './HeroContent'
import { HeroImage } from './HeroImage'
import imgCoffe from '../../Assets/CAfe.jpg'
export const Hero = () => {
  return (
    <div className='min-w-[1280px] wrapper flex px-10 py-12 gap-36 items-center justify-center'>
      <HeroContent h3={"De la planta a tu taza"} color="green" h1={"El mejor café del mundo, ahora en tu casa."} paragraf={"Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar."} />
      <HeroImage img={imgCoffe} w={588} h={390} className="" />
    </div>
  )
}
