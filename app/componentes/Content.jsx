import React from 'react'
export const Content = ({ h2, paragraf, color, size }) => {
    return (
        <div className=' h-[32px] flex flex-col gap-4'>
            {/* <h2 className={`text-${color} text-${size}`}  > {h2} </h2>
            <p className={`text-${color} text-${size}`}>{paragraf}</p> */}
            <h2 className="text-[#2A5B45] text-[24px] "  > {h2} </h2>
            <p className=" text-[14px] " >{paragraf}</p>
        </div>
    )
}
