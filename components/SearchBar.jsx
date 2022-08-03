import { SearchIcon } from '@heroicons/react/solid'
import MovieSearchCard from './MovieSearchCard'
import axios from 'axios'
import React, { useState, useTransition, useEffect } from 'react'
let firstTime = true;
function SearchBar() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState("")
    const [show, setShow] = useState(false)
    const [isPending, startTransition] = useTransition()
    const handleChange = async (e) => {
        startTransition(() => {
            setQuery(() => e.target.value)
        })
    }

    const handleFocus=()=>{
        setShow(true)
    }
    const handleBlur=()=>{
        setShow(false)
    }
    useEffect(() => {
        const getMovies = async () => {
            if (!query.trim()) return
            const url = process.env.NEXT_PUBLIC_MY_URL;
            const { data } = await axios.get(`/api/autoComplete?q=${query}`)
            setMovies(data)
        }
        getMovies()
    }, [query])

    return (
        <div className='md:table-cell  text-black hidden  text-right align-middle'>
            <form className='w-full z-[500] relative max-w-md flex justify-center items-center' action="">
                <input lang='ar' dir='rtl' placeholder='ابحث عن فلم' onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className='w-full border-[1px] rounded-md inline-block ml-auto  pl-[20px] p-1 shadow-sm focus:border-[#74caee]  focus:shadow-[inset_0_0_0_0_rgba(0,0,0,.05),0_0_0_0_rgba(255,255,255,.025),0_0_4px_0_#74caee!important]' type="text" />
                <SearchIcon className='w-[20px]  absolute left-[3px] h-[20px]' />
                <div className={`absolute ${show ? "block" : "hidden"} h-auto top-[calc(100%+2px)] border-t-0 border-gray-400 border shadow-[0_2px_2px_0_#aaa] w-full bg-white`}>
                    {movies ? movies?.map((movie,i) => (<MovieSearchCard key={i} title={movie.t} url={movie.u} image={movie.i}/>)) : null}
                </div>
            </form>
        </div>
    )
}

export default SearchBar