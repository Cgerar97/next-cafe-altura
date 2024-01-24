import React from 'react'
import Image from 'next/image'
export const Card = ({ icon, h3, paragraph }) => {
    return (
        <>
            <div className='w-[316px] h-60 bg-white rounded-lg p-6 border flex gap-4 flex-col items-center'>
                <div className='rounded-2xl flex  justify-center items-center '>
                    < Image
                        src={icon}
                        alt=''
                        width={''}
                        height={''}
                        className=' rounded-2xl flex justify-center items-center'
                    />
                </div>
                <div className='w-[268px] h-[24px]'>
                    <h3 className='text-center gap-5 self-center'> {h3}</h3>
                </div>
                <div className='w-[268px] h-[24px]' >
                    <p className='text-center'>{paragraph}</p>
                </div>
            </div>
        </>
    )
}
