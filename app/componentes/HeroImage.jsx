import React from 'react'
import Image from 'next/image'
export const HeroImage = ({ img, w, h }) => {
    return (
        <div>
            <div className=''>
                < Image
                    src={img}
                    alt=''
                    width={w}
                    height={h}
                    className='rounded-[20px]'
                />
            </div>
        </div>
    )
}
