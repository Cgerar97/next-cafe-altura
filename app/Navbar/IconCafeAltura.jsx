import React from 'react'
import imgcafe from '../../Assets/ps_coffee-hotGOOD.svg'
import Image from 'next/image'
import Link from 'next/link'
export const IconCafeAltura = ({color}) => {
  return (
    <div className='flex gap-2 items-center'>
      <section className={`text-[23px] text-${color}`}>
        <Link href="/"><p className='flex'>cafedealtura.com</p></Link> 
      </section>
      <section className='align-baseline'>
        <Image
          src={imgcafe}
          alt=''
          width={20.53}
          height={24.99}
        />  </section>
    </div>
  )
}
