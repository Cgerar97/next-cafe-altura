import React from 'react'
import { IconCafeAltura } from './IconCafeAltura'
import { BreadCrumbs } from './BreadCrumbs'
import { IconTienda } from './IconTienda'
import { Phone } from './Phone'
import Button from '../componentes/Button'
export const NavBar = () => {
  return (
    <div className='w-[1,280px] h-[64px] px-[40px] flex place-content-between bg-[#2B2A2B] text-white items-center  '>
       <IconCafeAltura />
      <BreadCrumbs />
      <section className='flex gap-6'>
        <Phone />
        <Button>
          Iniciar Sesion
        </Button>
      </section>
      <section >
        <IconTienda />
      </section>
    </div>
  )
}
