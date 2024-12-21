import React from 'react';
import Image from 'next/image';
import { Banknote, Search, Ticket, User } from 'lucide-react';

const BlogPage = () => {
  return (
    <>
      {/* Banner Section */}
      <div>
        <Image
          src={"/images/blog.webp"}
          alt="blog"
          width={1440}
          height={316}
          className="w-full h-auto mt-20"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:h-[2210px] px-4 lg:px-0">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:ml-12">
          {/* Blog Post 1 */}
          <Image
            src={"/images/laptop.webp"}
            alt="laptop-img"
            width={817}
            height={500}
            className="mt-8 lg:mt-28 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-2 mt-2">
            <p className='text-[#9F9F9F]'><User/></p>
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <p className='text-[#9F9F9F]'><Banknote/></p>
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <p className='text-[#9F9F9F]'><Ticket/></p>
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 2 */}
          <Image
            src={"/images/drawing.webp"}
            alt="drawing-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
         <div className="flex items-center gap-2 lg:gap-2 mt-2">
            <p className='text-[#9F9F9F]'><User/></p>
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <p className='text-[#9F9F9F]'><Banknote/></p>
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <p className='text-[#9F9F9F]'><Ticket/></p>
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Exploring new ways of decorating
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 3 */}
          <Image
            src={"/images/book.webp"}
            alt="books-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
         <div className="flex items-center gap-2 lg:gap-2 mt-2">
            <p className='text-[#9F9F9F]'><User/></p>
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <p className='text-[#9F9F9F]'><Banknote/></p>
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <p className='text-[#9F9F9F]'><Ticket/></p>
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Handmade pieces that took time to make
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:mr-20 lg:ml-20 mt-10 lg:mt-28">
          {/* Search Bar */}
          <div className="flex justify-around items-center w-[351px] h-[58px] border border-[#9F9F9F] rounded-md">
            <input className='p-3 focus:outline-none' type="text" placeholder='Assalam o Alaikum 🤍'/>
            <p>
            <Search className='cursor-pointer'/>
            </p>
          </div>

          {/* Categories */}
          <h1 className="text-[20px] lg:text-[24px] font-semibold mt-10">Categories</h1>
          <div className="space-y-4 lg:space-y-6">
            {[
              { name: 'Crafts', count: 2 },
              { name: 'Design', count: 8 },
              { name: 'Handmade', count: 7 },
              { name: 'Interior', count: 1 },
              { name: 'Wood', count: 6 },
            ].map((category) => (
              <div key={category.name} className="flex justify-between text-sm lg:text-base">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <h1 className="text-[24px] font-semibold mb-8">Recent Posts</h1>
          {[
            { src: '/images/pro1.webp', title: 'Going all-in with millennial design' },
            { src: '/images/pro2.webp', title: 'Exploring new ways of decorating' },
            { src: '/images/pro3.webp', title: 'Handmade pieces that took time to make' },
            { src: '/images/pro4.webp', title: 'Modern home in Milan' },
            { src: '/images/pro5.webp', title: 'Colorful office redesign' },
          ].map((post, index) => (
            <div key={index} className="flex items-center justify-between gap-8">
              <Image src={post.src} alt={`post${index + 1}`} width={80} height={80} />
              <div className="flex flex-col">
                <h1 className="font-semibold text-[14px] w-[119px]">{post.title}</h1>
                <span className="text-[#9F9F9F]">03 Aug 2022</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 lg:gap-8 mt-10 lg:mt-14">
        {['1', '2', '3', 'Next'].map((item) => (
          <div
            key={item}
            className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center ${item === '1' ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'
              }`}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPage;