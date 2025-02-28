'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import {twMerge} from 'tailwind-merge'
import { RxCaretLeft,RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi2'
import { IoSearch } from "react-icons/io5";
import { Button } from './Button'

interface HeaderProp{
    children:React.ReactNode,
    className?:string
}

export const Header:React.FC<HeaderProp> = ({children,className}) => {
    const router = useRouter()
    const handleLogout = () =>{

    }
  return (
    <div className={twMerge(`
    h-fit
    bg-gradient-to-b
    from-emerald-800
    p-6
    `,className)}
    >
        <div className='w-full
        mb-4
        flex
        items-center
        justify-between

        '>
          <div className='hidden
           md:flex
           gap-x-2
           items-center
           '>
            <button 
            onClick={()=>router.back()}
            className='
            rounded-full
            bg-black
            flex
            justify-center
            items-center
            hover:opacity-75
            transition
            '>
            <RxCaretLeft className='text-white'size={35}/>
            </button>
            <button 
             onClick={()=>router.forward()}
            className='
            rounded-full
            bg-black
            flex
            justify-center
            items-center
            hover:opacity-75
            transition
            '>
            <RxCaretRight className='text-white'size={35}/>
            </button>
           </div>
           <div className='flex md:hidden items-center gap-x-2'>
            <button className='
            rounded-full
            bg-white
            p-2
            flex
            items-center
            justify-center
            hover:opacity-75
            transition
            '>
                <HiHome className='text-black' size={20}/>
            </button>
            <button className='
            rounded-full
            bg-white
            p-2
            flex
            items-center
            justify-center
            hover:opacity-75
            transition
            '>
                <IoSearch className='text-black' size={20}/>
            </button>
           </div>
           <div className='
           flex
           justify-between
           items-center
           gap-x-4'>
             <>
             <div>
                <Button 
                onClick={()=>{}}
                className='bg-transparent
                text-neutral-300
                font-medium'>
                    Sing up
                    </Button>
             </div>
             <div>
                <Button 
                onClick={()=>{}}
                className='bg-white
                px-6
                py-2'>
                   Log in
                    </Button>
             </div>
             </>
           </div>
        </div>
        {children}
    </div>
  )
}
