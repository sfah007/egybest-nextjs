import React from 'react'
import Image from "next/image"
import { FaStar } from "react-icons/fa"
function MovieImage({ src, text, rate }) {
    return (
        <div className='relative bg-green-200  w-[140px] h-[200px]'>
            <Image src={src} layout="fill" alt="hello" />
            <div className=' absolute overflow-hidden left-[-5px] top-[-5px] flex justify-center items-center  rounded-bl-[13px] rounded-tr-[13px] w-[75px] h-[75px]'>
                <div className='w-[100px] shadow-md text-[14px] font-bold uppercase left-[-21px] top-[19px] absolute  text-center bg-green-600 text-white -rotate-45'>
                    {text}
                </div>
            </div>

            {
                rate ? (<div className='absolute top-[5px] right-0'>
                    <div className='relative   w-10 h-10  flex items-center justify-center font-bold'>
                        <FaStar className='absolute   w-full h-full shadow-white drop-shadow-[0_0_4px_#bbb]   inline-block text-yellow-400' />
                        <div className='absolute leading-[0] text-[0.8rem]'>{rate}</div>
                    </div>
                </div>) : null
            }

        </div>
    )
}

export default MovieImage