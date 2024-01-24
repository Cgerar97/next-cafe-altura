import React from 'react'
import { Card } from './Card'
import iconCheck from '../../Assets/CHECk.jpg'
import camnionIncon from '../../Assets/CamionIcon.jpg'
import iconGift from '../../Assets/IconGift.jpg'
export const ItemsCard = () => {
  return (
      // h DE 40 ES LO MAS CERCANO A 147PX EN REM     
      <div>
          <div className='w-[1,280px] h-[380px] px-12 py-20 gap-6  bg-fondo-card   bg-cover flex justify-center   ' >
              <Card icon={iconCheck} h3="Recibe tu pedido sin preocuparte" paragraph="Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana. " />
              <Card icon={camnionIncon} h3="Envío en 24/48h" paragraph="Pide tu café antes de las 12h y lo recibirás al día siguiente." />
              <Card icon={iconGift} h3="Descuentos y beneficios" />
          </div>
      </div>
  )
}
