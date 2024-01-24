import React from 'react'
const Form = () => {
    return (
        <form action="" className='w-[588px]  bg-white flex flex-col pl-12 py-[32px]  px-[32px] pb-[32px] gap-6'>
            <label htmlFor="name" >Nombre completo
                <input type="text" id='name ' className='flex w-[470px] border border-[#D1D5DB] rounded-md' /></label>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className='border border-[#D1D5DB] rounded-md' />
            <label htmlFor="phone">Teléfono</label>
            <input type="number" id='phone' className='border border-[#D1D5DB] rounded-md' />
            <input type="text" placeholder='¿En qué podemos ayudarte?' className='h-[122px] border border-[#D1D5DB] rounded-md' />
             <label htmlFor="terminos">
            <input type="checkbox" id='terminos' />
                Acepto la Política de Privacidad y los Términos y condiciones.
             </label>
        </form>
    )
}
export default Form