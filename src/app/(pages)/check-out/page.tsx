import PromotionBelt from '@/app/components/PromotionBelt'
import { ArrowBigLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='pt-[100px] max-w-[1280px] m-auto'>
         <section>
          <Link href='/'>
        <img src="/images/cart-img.webp" alt="" />
          </Link>
        </section>
        <section>
          <PromotionBelt/>
        </section>
    </div>
  )
}

export default page