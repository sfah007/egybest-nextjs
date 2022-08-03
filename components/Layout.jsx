import React from 'react'
import Left from './Left'
import Navbar from './Navbar'
import Right from './Right'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className='md:table  min-h-screen w-full mt-[70px]'>
                <Right />
                <div className='md:table-cell text-center  w-full  px-1 xl:pr-[220px] md:pr-[60px]'>
                    <h1 className='text-center my-[0.67em] text-[2em] font-bold'>
                        مرحباً في موقع ايجي بست الاصلي
                    </h1>
                    <div className='w-full'>
                        {children}
                    </div>
                </div>

                <Left />
            </div>
        </>
    )
}

