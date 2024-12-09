import React from 'react'

const PromotionBelt = () => {
  return (
    <div>
               <section className='flex justify-around flex-wrap items-center gap-5 bg-[#FAF3EA] p-5'>
            <div className='flex items-center'>
            <img src="/images/Group.png" alt="" />
            <div className=''>
                <p>High Quality</p>
                <p>crafted from top materials</p>
            </div>

            </div>
            <div className='flex items-center'>
            <img src="/images/guarantee.png" alt="" />
            <div className=''>
                <p>Warranty Protection</p>
                <p>Over 2 years</p>
            </div>

            </div>
            <div className='flex items-center'>
            <img src="/images/Vector (9).png" alt="" />
            <div className=''>
                <p>Free Shipping</p>
                <p>Order over 150 $</p>
            </div>

            </div>
            <div className='flex items-center'>
            <img src="/images/Vector (10).png" alt="" />
            <div className=''>
                <p>24 / 7 Support</p>
                <p>Dedicated support</p>
            </div>

            </div>
            
        </section>
    </div>
  )
}

export default PromotionBelt