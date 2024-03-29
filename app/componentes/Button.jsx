"use client"
import React from 'react'
import { cva } from "class-variance-authority";
//class-variance-authority: library
const ButtonVariants = cva(
  /* button base style */
  "h-auto text-white uppercase transition-colors duration-150",
  {
    variants: {
      /* button colors */
      intent: {
        primary:
          "bg-green-500 hover:bg-green-600",
        secondary:
          "bg-red-500 hover:bg-red-600",
        default:
          "bg-gray-500 hover:bg-gray-600",
      },
      /* button sizes */
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
        large: ["text-lg", "py-4", "px-8"],
      },
      /* button roundness */
      roundness: {
        square: "rounded-none",
        round: "rounded-md",
        pill: "rounded-full",
      },
    },
    // defaults
    defaultVariants: {
      intent: "default",
      size: "medium",
      roundness: "round"
    },
    //FUNCTION
  
  }
);
export default function Button({ intent, size, roundness, children,funcion }) {
 
  return (
    <button onClick={funcion} className={ButtonVariants({ intent, size, roundness })}>{children}</button>
  )
}
// export const Buttonn = ({texto, w , h , bg}) => {
//   return (
//     <div className=''>
//       <div className='  text-center  '>
//           <button className=" "> {texto}</button>
//     </div>
//     </div>
//   )
// }
