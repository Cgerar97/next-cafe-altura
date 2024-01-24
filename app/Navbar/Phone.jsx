import React from 'react'
import phone from '../../Assets/Phone.svg'
import Image from 'next/image'
export const Phone = ({ img, color }) => {
    return (
        <div className={`flex items-center text-${color}`}>
            <section className=''>   <Image
                src={phone}
                alt=''
                width={25}
                height={24}
            />  </section>
            <section className=' text-[14px]'>
                <p>+34 919 49 05 18</p>
            </section>
        </div>
    )
}
