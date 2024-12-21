"use client";
import OurProducts from "@/app/components/OurProducts";
import PromotionBelt from "@/app/components/PromotionBelt";
import { ArrowBigLeft, FilterIcon, FolderOutputIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" max-w-[1280px] m-auto">
      <section className="">
        <Link href="/" passHref>
          <Image
            src={"/images/shop.svg"}
            alt="contact"
            width={1440}
            height={316}
            className="w-full h-auto mt-20 cursor-pointer"
          />
          {/* <img src="/images/shop.svg" alt="" /> */}
        </Link>
      </section>
      <section className="bg-[#F9F1E7] p-5 flex justify-around flex-wrap gap-10">
        <div className="flex gap-5 cursor-pointer">
          <p>
            <FilterIcon />
          </p>
          <p>Filter</p>
          <p>
            <FolderOutputIcon />
          </p>
          <p>|</p>
          <p>Showing 1–16 of 32 results</p>
        </div>
        <div className="flex gap-5 cursor-pointer">
          <p>Show</p>
          <input className="w-8 text-center" type="number" placeholder="16" />
          <p>Short By</p>
          <input
            className="text-center flex-wrap xsm:w-[100px]"
            type="text"
            placeholder="default"
          />
        </div>
      </section>
      <section>
        <OurProducts />
        <OurProducts />
        <div>
          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 lg:gap-8 mt-10 lg:mt-14">
            {["1", "2", "3", "Next"].map((item) => (
              <div
                key={item}
                className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center cursor-pointer ${
                  item === "1" ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <PromotionBelt />
    </div>
  );
};

export default page;
