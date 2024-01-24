import React from 'react'
export const FAQ = ({h3,paragraf}) => {
  return (
    <div className='w-[688px] h-[136px] rounded-lg p-6 gap-[16px] bg-white flex-col items-start'>
<h3> {h3}</h3>
<p>{paragraf}</p>
    </div>
  )
}
