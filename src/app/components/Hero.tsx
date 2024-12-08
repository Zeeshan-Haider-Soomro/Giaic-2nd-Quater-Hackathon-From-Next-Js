import React from 'react'

const Hero = () => {
  return (
    <div>
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
            
        </section>
    </div>
    </div>
  )
}

export default Hero