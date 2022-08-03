import React from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import MovieCard from './MovieCard'
import Link from 'next/link'

function Slide({ box }) {
    return (
        <div className='w-full bg-white shadow-md relative overflow-hidden rounded-[4px]'>

            <div className='p-3  flex justify-between items-center'>
                <strong>{box.title}</strong>
                <Link href={box.moreLink}>
                    <a className='text-blue-500' href={box.moreLink}>
                        {"المزيد"}
                        <span className='text-[0.8rem]'>{" >> "}</span>
                    </a>
                </Link>
            </div>

            <hr className='border' />
            <div className='h-[290px]  overflow-auto scrollbar-thumb-red-400 scrollbar-track-blue-200 scrollbar  overflow-y-hidden relative'>

                <div className='w-full px-[5px]   h-full absolute gap-6  flex'>
                    {box.cards.map((e, i) => (<MovieCard key={i} movie={e} />))}
                </div>

            </div>
        </div>
    )
}

export default Slide