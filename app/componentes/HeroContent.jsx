import React from 'react'
import Button from './Button'
import { cva } from 'class-variance-authority'
export const HeroContent = ({ h3, h1, paragraf, color }) => {
    return (
        <div className=' flex-col gap-4 w-[588px] h-[232px]'>
            <section className="text-[#2A5B45] text-[18px]">  <h3  >   {h3}</h3> </section>
            <section className='text-[40px] w-[588px] leading-10'>   <h1 >{h1}</h1></section>
            <section className='w-[588px] h-[32px] text-[14px]'>   <p >{paragraf}</p></section>
            <br />
            <div className='ButtonWrapper flex gap-2 w-[321px] h-[40px]'>
                <Button>
                    Añadir
                </Button>
{/* <Button>
Descubre origenes
</Button> */}
                {/* <section className='w-[168px] max-h-12 px-3 py-6 rounded bg-[#1F1815] text-white'>
                    <Button texto="Descubre origenes" />
                </section>
                <section className='w-[137px] max-h-12 px-3 py-6 rounded bg-[#2A5B45] text-white '><Button texto="Comprar café" />
                </section> */}
            </div>
        </div>
    )
}
