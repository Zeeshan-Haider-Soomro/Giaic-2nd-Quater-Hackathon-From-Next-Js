'use client'
import OurProducts from '@/app/components/OurProducts'
import PromotionBelt from '@/app/components/PromotionBelt'
import { ArrowBigLeft, FilterIcon, FolderOutputIcon,} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='pt-[100px] max-w-[1280px] m-auto'>
        <section>
        <img src="/images/Rectangle 1.png" alt="" />
        <div className='absolute top-[35%] right-[48%] text-center'>
        <p className='text-3xl font-semibold'>Shop</p>
        <Link className=' py-5' href='/'><span className='font-bold'>Home <ArrowBigLeft/> </span> shop</Link>
        </div>
        </section>
        <section className='bg-[#F9F1E7] p-5 flex justify-around '>
            <div className='flex gap-5 cursor-pointer'>
                <p><FilterIcon/></p>
                <p>Filter</p>
                <p><FolderOutputIcon/></p>
                <p>|</p>
                <p>Showing 1–16 of 32 results</p>
            </div>
            <div className='flex gap-5 cursor-pointer'>
                <p>Show</p>
                <input className='w-8 text-center' type="text" placeholder='16' />
                <p>Short By</p>
                <input className='px-5' type="text" placeholder='default' />
            </div>
        </section>
        <section>
            <OurProducts/>
            <OurProducts/>
            <div className='text-center'>
    <button className='text-[#B88E2F] text-center border-2 border-[#B88E2F] px-5 m-5'>show more</button>
  </div>
        </section>
        <PromotionBelt/>
    </div>
  )
}

export default page