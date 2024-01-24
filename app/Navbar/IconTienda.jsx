import React from 'react'
import carr from '../../Assets/CarrWhite.svg'
import Image from 'next/image'
import Link from 'next/link'
export const IconTienda = () => {
  return (
    <div className=''> 
      <section className=' text-2xl'> 
        <Link href="/cesta">   <Image
          src={carr}
          alt=''
          width={24}
          height={24}
          className=''
        /> </Link>
       </section>
    </div>
  )
}
