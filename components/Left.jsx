import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"


export default function Left() {
    const [links, setLinks] = useState([])
    const url = process.env.NEXT_PUBLIC_MY_URL
    useEffect(() => {
        const getLinks = async () => {
            const { data } = await axios.get(`/api/links`)
            setLinks(data)
        }

        getLinks()

    }, [])

    return (
        <div className='p-2 w-full md:w-[250px] lg:w-[300px]'>
            <div className='divide-y bg-white border rounded-md'>
                <div className='text-center p-2 font-arabicBold'>
                    <strong>تابع اجي بست</strong>
                </div>
                <div className='p-2 flex flex-col gap-2 items-center justify-center'>
                    <a className='text-blue-600 text-[0.9rem] hover:text-blue-900 font-bold' href="https://www.facebook.com/EgyBestOriginal"><FaFacebookSquare className='inline-block text-blue-600 text-[1.5rem]' /> EgyBestOriginal</a>
                    <a className='text-blue-600 text-[0.9rem] hover:text-blue-900 font-bold' href="https://www.facebook.com/EgyBestOriginal"><FaTwitterSquare className='inline-block text-blue-500 text-[1.5rem]' /> @EgyBestOriginal</a>
                </div >
            </div >
            <div className='mt-3 grid grid-cols-2 gap-3'>
                {links?.map((v, i) => {
                    return (<Link href={"/" + v.path} key={i}>
                        <a href={"/" + v.path} className='rounded-md w-full block text-center hover:text-white hover:bg-red-500  p-2 text-red-500 bg-white text-[0.9rem]'>
                            {v.text}
                        </a>
                    </Link>)
                })}
            </div>
        </div >
    )
}

