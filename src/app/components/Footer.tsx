import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1280px] m-auto my-[100px]'>
        <div className='md:flex xsm:flex-none xsm:p-5 justify-around gap-10'>
        <div className='flex flex-col gap-10'>
            <h1 className='font-bold text-2xl'>Furniro</h1>
            <p className='text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</p>
        </div>
        <div className='flex flex-col gap-10 py-5 xsm:gap-5'>
            <p className='text-[#9F9F9F]'>Links</p>
            <Link href='/'>Home</Link>
            <Link href='/shop'>Shop</Link>
            <Link href='/about'>About</Link>
            <Link href='/check-out'>Contact</Link>
        </div>
        <div className='flex flex-col gap-10 xsm:gap-5'>
            <p className='text-[#9F9F9F] py-5'>Help</p>
            <p>Payment Options</p>
            <p>Returns</p>
            <p>Privacy Policies</p>
        </div>
        <div className='flex flex-col gap-10 xsm:gap-5'>
            <p className='text-[#9F9F9F] py-5'>Newsletter</p>
            <p>Enter Your Email Address</p>
        </div>
    </div>
        <div className='p-3 py-5 border-t-2 border-[#9F9F9F] m-5'>
            <p className=''>2023 Zeeshan Haider Soomro. All rights reverved</p>
        </div>
    </div>
  )
}

export default Footer