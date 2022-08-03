import React, { useState } from 'react'
import Link from "next/link"
import { MenuIcon } from '@heroicons/react/solid'
import { menuData } from '../lib/data';
import { useRouter } from 'next/router'



function Right() {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const paths = menuData.map(p => p.href)
    const handleMenu = (e) => {
        e.preventDefault()
        setOpen((state) => !state);
    }
    return (
        <div className={`md:table-cell hidden xl:w-[200px] w-full ${open ? "md:w-[200px]" : "md:w-[45px]"} z-20 fixed top-[60px] md:top-[70px] md:right-[5px]`}>
            <div className='border   relative text-[1.4rem] bg-white whitespace-nowrap overflow-x-hidden md:w-full md:rounded-md'>

                <a onClick={handleMenu} className={`hidden md:block ${open ? "text-center" : "text-right"} border-b  font-arabicRegular hover:text-red-500 ${paths.includes(router.asPath) ? "text-blue-600" : "text-red-500 border-b-2 border-red-500"} relative px-2  py-4 `} href="#">
                    <MenuIcon className='w-[30px] ml-2 inline' />
                    القائمة
                </a>

                {

                    menuData.map((e, i) => (
                        <Link key={i} href={e.href}>
                            <a className={` ${e.href === router.asPath ? "text-red-500 font-arabicBold  border-red-500 border-b-2" : "border-b font-arabicRegular"
                                }  block  hover:text-red-500 text-blue-600 relative px-2  py-4 `} href={e.href}>
                                <e.Icon className='w-[30px] ml-2 inline' />
                                {e.title}
                            </a>
                        </Link>
                    ))

                }
            </div>
        </div>
    )
}

export default Right