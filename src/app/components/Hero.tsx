"use client"

import React from 'react'
import OurProducts from './OurProducts'

const Hero = () => {
  return (
    <div className='max-w-[1280px] m-auto'>
            <div>
        <img src="/images/heroBanner.png" alt="" />
        <section>
            <div className='text-center m-5 leading-10'>
            <h1 className='font-semibold text-2xl'>Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='flex justify-around flex-wrap'>
                <div className='w-[300px]'>
                <img src="/images/Mask Group.png" alt="" />
                <p className='text-center'>Dining</p>
                </div>
                <div className='w-[300px]'>
                <img src="/images/image 100.png" alt="" />
                <p className='text-center'>Dining</p>
                </div>
                <div className='w-[300px]'>
                <img src="/images/image 101.png" alt="" />
                <p className='text-center'>Dining</p>
                </div>
            </div>
        </section>
        <section>
            <h1 className='text-center font-bold text-3xl m-5'>Our Products</h1>
           <OurProducts/>
           <div className='text-center'>
    <button className='text-[#B88E2F] text-center border-2 border-[#B88E2F] px-5 m-5'>show more</button>
  </div>
        </section>
        <section className='m-5'>
            <img src="/images/Inspirations.png" alt="" />
        </section>
        <section className='text-center m-5'>
            <p className='m-5'>Share your setup with</p>
            <h1 className='font-bold text-3xl m-5'>#FurniroFurniture</h1>
            <img src="/images/Images (6).png" alt="" />
        </section>
    </div>
    </div>
  )
}

export default Hero