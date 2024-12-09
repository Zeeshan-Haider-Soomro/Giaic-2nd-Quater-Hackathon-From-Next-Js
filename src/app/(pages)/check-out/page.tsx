import PromotionBelt from '@/app/components/PromotionBelt'
import { ArrowBigLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='pt-[100px] max-w-[1280px] m-auto'>
         <section>
        <img src="/images/Rectangle 1.png" alt="" />
        <div className='absolute top-[35%] right-[45%] text-center'>
        <p className='text-3xl font-semibold'>Check Out</p>
        <Link className=' py-5' href='/'><span className='font-bold'>Home <ArrowBigLeft/> </span> check out</Link>
        </div>
        </section>
        <section>
          <PromotionBelt/>
        </section>
    </div>
  )
}

export default page