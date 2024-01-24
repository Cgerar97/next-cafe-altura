import Link from 'next/link'
import React from 'react'
export const BreadCrumbs = ({color, flex}) => {
  return (
<ul  className={` flex gap-11  flex-${flex} text-${color}  `}>
      <li><Link href="/tienda">Tienda</Link></li>
      <li><Link href="/suscripcion">Suscripción</Link></li>
<li><link href="" />Para empresas</li>
<li><link href="" />Sobre nosotros</li>
<li><link href="" />Contacto</li>
</ul>

  )
}
export default BreadCrumbs