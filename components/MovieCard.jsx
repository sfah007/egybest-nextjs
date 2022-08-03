import Link from 'next/link'
import React from 'react'
import MovieImage from './MovieImage'

function MovieCard({ movie }) {
    return (
        <Link href={movie.link}>
            <a href={movie.link} className='block  mt-[20px] h-[190px] w-[140px] bg-red-500'>
                <MovieImage src={movie.imageSrc} text={movie.ribbonText} rate={movie.rate} />
                <div className='text-center text-[14px] mt-2 text-blue-600 hover:text-blue-800'>
                    {movie.title}
                </div>
            </a>
        </Link>
    )
}

export default MovieCard