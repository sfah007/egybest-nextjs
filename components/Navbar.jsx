import React from 'react'
import SearchIcon from '@heroicons/react/outline/SearchIcon'
import { SearchIcon as MSearchIcon } from '@heroicons/react/solid'
import UserIcon from '@heroicons/react/solid/UserIcon'
import MenuIcon from '@heroicons/react/solid/MenuIcon'
import SearchBar from './SearchBar'



function Navbar() {
  return (
    <div className="font-arabicRegular text-[1rem] z-50 w-full fixed top-0 left-0 text-white bg-white shadow-md px-[5px] md:px-[10px]">

      <div className='m-auto w-full max-w-[1320px] h-[60px] table'>
        <div className='table-cell lg:hidden  text-blue-500 text-left align-middle'>
          <MenuIcon className='w-[30px] md:hidden ml-2 mr-auto h-[30px]' />
        </div>
        <div className='table-cell text-right  md:text-center align-middle'>
          <img className="ml-auto object-contain md:w-[120px] lg:w-[140px] w-[100px] inline-block" src="https://i.egycdn.com/a/egybest_logo.png" />
        </div>

        <SearchBar />

        <div className='table-cell   text-left align-middle'>
          <div className='flex flex-wrap items-center justify-center gap-1'>
            <a href="#" className='bg-[#10bf46] mr-auto justify-center items-center max-w-[120px] p-2 rounded-md flex gap-1 font-arabicBold leading-[24px] text-[11pt]'>
              <UserIcon className='w-[25px] h-[25px]' />
              <span className='drop-shadow-md'>اشترك معنا</span>
            </a>
            <MSearchIcon className='w-[25px] md:hidden text-blue-500  h-[25px]' />
          </div>

        </div>
        <div className='lg:table-cell hidden  text-center align-middle'>
          <a href="#" className='bg-blue-500 mr-5 justify-center items-center max-w-[120px] p-2 rounded-md flex leading-[24px] text-[11pt]'>
            <span className='drop-shadow-md'>تسجيل الدخول </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar