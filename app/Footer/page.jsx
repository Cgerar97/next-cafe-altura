import React from 'react'
import { IconCafeAltura } from '../Navbar/IconCafeAltura'
import { Phone } from '../Navbar/Phone'
import CopyRightFooter from '../componentes/CopyRightFooter'
import { BreadCrumbs } from '../Navbar/BreadCrumbs'
const Footer = () => {
  return (
    <div className=' flex flex-col justify-end w-[1,280px] h-[310px] bg-neutral-950'>
        <div className='flex flex-col flex-wrap self-stretch'>
<IconCafeAltura color={"white"}/>
<Phone color={"white"}/>
<BreadCrumbs color={"white"} flex={"col"}/>
        </div>
    </div>
  )
}
export default Footer