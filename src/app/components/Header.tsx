"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { Drawer } from 'antd';
import { Menu } from 'lucide-react';

const Header = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='xsm:justify-between flex justify-around items-center p-5'>
      <div className='flex items-center'>
        <Image className='h-8 w-14' src='/images/logo.png' alt='' width={20} height={20} />
        <h1 className='text-3xl font-bold'>Furniro</h1>
      </div>
        <div className='xsm:hidden sm:hidden md:flex gap-[30px]'>
          <Link href='/'>Home</Link>
          <Link href='/shop'>Shop</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/about-us'>About Us</Link>
          <Link href='/contact-us'>Contact Us</Link>
        </div>
      <Drawer className='w-full' onClose={onClose} open={open}>
      <div className=' flex justify-center items-center gap-[30px]'>
        <Image className='cursor-pointer' src='/images/navbarMenLogo.png' alt='' width={20} height={20} />
        <Image className='cursor-pointer' src='/images/navbarSearchLogo.png' alt='' width={20} height={20} />
        <Image className='cursor-pointer' src='/images/navbarHeartLogo.png' alt='' width={20} height={20} />
        <Image className='cursor-pointer' src='/images/navbarCartLogo.png' alt='' width={20} height={20} />
      </div>
        <div className='flex items-center flex-col gap-3 mt-10 text-2xl'>
        <Link href='/'>Home</Link>
          <Link href='/shop'>Shop</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/about-us'>About Us</Link>
          <Link href='/contact-us'>Contact Us</Link>
        </div>
      </Drawer>
      <div className='xsm:hidden sm:hidden md:flex flex items-center gap-[30px]'>
        <Image className='cursor-pointer' src='/images/navbarMenLogo.png' alt='' width={20} height={20} />
        <Image className='cursor-pointer' src='/images/navbarSearchLogo.png' alt='' width={20} height={20} />
        <Image className='cursor-pointer' src='/images/navbarHeartLogo.png' alt='' width={20} height={20} />
        <Image className='cursor-pointer' src='/images/navbarCartLogo.png' alt='' width={20} height={20} />
      </div>
        <Menu className='md:hidden' onClick={showDrawer}/>
    </div>
  );
};

export default Header;
