import { Card } from 'antd';
import { ArrowRightLeft,Heart, Share2 } from 'lucide-react';
import React from 'react';

const { Meta } = Card;

const OurProducts: React.FC = () => {
  return (
    <div className="p-5">
      <div className="flex flex-wrap justify-center gap-8">
        {[
          {
            title: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 'Rs : 2,500.00',
            image: '/images/image 1 (1).png',
          },
          {
            title: 'Leviosa',
            description: 'Stylish cafe chair',
            price: 'Rs : 2,500.00',
            image: '/images/Images (2).png',
          },
          {
            title: 'Lolito',
            description: 'Luxury big sofa',
            price: 'Rs : 7,000.00',
            image: '/images/image 3.png',
          },
          {
            title: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rs : 500.00',
            image: '/images/image 4.png',
          },
          {
            title: 'Grifo',
            description: 'Night lamp',
            price: 'Rs : 1,500.00',
            image: '/images/Images (3).png',
          },
          {
            title: 'Muggo',
            description: 'Small mug',
            price: 'Rs : 150.00',
            image: '/images/Images (5).png',
          },
          {
            title: 'Pingky',
            description: 'Cute bed set',
            price: 'Rs : 7,000.00',
            image: '/images/image 7.png',
          },
          {
            title: 'Potty',
            description: 'Minimalist flower pot',
            price: 'Rs : 500.00',
            image: '/images/image 8 (1).png',
          },
        ].map((product, index) => (
          <div
            key={index}
            className="relative w-[280px] h-[400px] rounded-md overflow-hidden shadow-lg group"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-[100px]">
              {/* Buttons */}
              <button className="px-8 py-2 mb-2 bg-white hover:bg-white text-[#b88e2f] transition">
                Add to cart
              </button>
              {/* Links */}
            <div className='flex gap-5'>
              <div className='flex flex-row text-white gap-2'>
              <Share2/>
              <p>Share</p>
              </div>
              <div className='flex flex-row text-white gap-2'>
              <ArrowRightLeft/>
              <p>Compare</p>
              </div>
              <div className='flex flex-row text-white gap-2'>
              <Heart/>
              <p>Like</p>
              </div>
            </div>
            </div>

            {/* Product Info */}
            <div className="absolute bottom-0 bg-white w-full p-3">
              <Meta title={product.title} description={product.description} />
              <p className="text-[20px] py-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
