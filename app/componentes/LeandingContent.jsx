import React from 'react'
import { Phone } from '../Navbar/Phone'
const LeandingContent = () => {
    return (
        <div className='w-[-1,200px] h-[552px] flex  gap-6 opacity-60 justify-center items-center '>
            <div className='ContactSections w-[588px] h-[320px] gap-8 bg-{#E3DED7} flex  flex-col items-start'>
                <section className='header flex flex-col  '>
                    <h3 className='font-semibold text-[18px]'> Entra en contacto con nosotros</h3>
                    <p className='font-normal'>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>
                </section>
                <section className='content flex flex-col gap-6'>
                    <p>TAmbién puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>
                    <article className=''>
                        <p> 742 Evergreen Terrace</p>
                        <p>Springfield, OR 12345</p>
                    </article>
                    <article >
                        <Phone />
                        <p>support@example.com</p>
                    </article>
                    <p>¿Buscas un trabajo?  <a href="">Ver nuestras ofertas.</a></p>
                </section>
            </div>
        </div>
    )
}
export default LeandingContent