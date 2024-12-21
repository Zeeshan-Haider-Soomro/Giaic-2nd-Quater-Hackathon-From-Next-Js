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
    <div className='xsm:justify-between flex justify-around items-center p-5 
    fixed w-[100%] top-0 left-0 bg-white z-50 '>
        <Link href='/'>
      <div className='flex items-center'>
        <Image className='h-8 w-14' src='/images/logo.png' alt='' width={20} height={20} />
        <h1 className='text-3xl font-bold'>Furniro</h1>
      </div>
        </Link>
        <div className='xsm:hidden sm:hidden md:flex gap-[30px] '>
          <Link className='hover:text-[#b88e2f]' href='/'>Home</Link>
          <Link className='hover:text-[#b88e2f]' href='/shop'>Shop</Link>
          <Link className='hover:text-[#b88e2f]' href='/blog'>Blog</Link>
          <Link className='hover:text-[#b88e2f]' href='/contact'>Contact</Link>
          </div>
      <Drawer className='w-full' onClose={onClose} open={open}>
      <div className=' flex justify-center items-center gap-[30px]'>
        <Image className='cursor-pointer hover:text-[#b88e2f]' src='/images/navbarMenLogo.png' alt='' width={20} height={20} />
        <Image className='cursor-pointer hover:text-[#b88e2f]' src='/images/navbarSearchLogo.png' alt='' width={20} height={20} />
        <Image className='cursor-pointer hover:text-[#b88e2f]' src='/images/navbarHeartLogo.png' alt='' width={20} height={20} />
        <Link href='/check-out'><Image className='cursor-pointer hover:text-[#b88e2f]' src='/images/navbarCartLogo.png' alt='' width={20} height={20} /></Link>
      </div>
        <div className='flex items-center flex-col gap-3 mt-10 text-2xl'>
          <Link className='hover:text-[#b88e2f]' href='/'>Home</Link>
          <Link className='hover:text-[#b88e2f]' href='/shop'>Shop</Link>
          <Link className='hover:text-[#b88e2f]' href='/blog'>Blog</Link>
          <Link className='hover:text-[#b88e2f]' href='/contact'>Contact Us</Link>
        </div>
      </Drawer>
      <div className='xsm:hidden sm:hidden md:flex flex items-center gap-[30px]'>
        <Image className='cursor-pointer hover:text-[#b88e2f]' src='/images/navbarMenLogo.png' alt='' width={20} height={20}/>
        <Image className='cursor-pointer hover:text-[#b88e2f]' src='/images/navbarSearchLogo.png' alt='' width={20} height={20} />
        <Image className='cursor-pointer hover:text-[#b88e2f]' src='/images/navbarHeartLogo.png' alt='' width={20} height={20} />
        <Link href='/check-out'><Image className='cursor-pointer hover:text-[#b88e2f]' src='/images/navbarCartLogo.png' alt='' width={20} height={20} /></Link>
      </div>
        <Menu className='md:hidden' onClick={showDrawer}/>
    </div>
  );
};

export default Header;
