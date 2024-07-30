"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "@/Components/Image";
import Navbar from '@/Components/Navbar'

const Slug = () => {
  const params = useParams();
  const slug = params.slug; 

  return (
    <>
      <Image />
      <Navbar />
      <div className="javascript-page  w-9/12  mx-auto" >
      <div className="text-center py-16 text-white  gap-5 flex justify-center items-center flex-col">
      <h1 className="text-4xl font-semibold ">Tiltle of  {slug}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, aliquid non! Obcaecati, sapiente sunt quo ullam eos, minima consequuntur ea voluptas ab alias inventore quas explicabo! Enim voluptas fugiat molestiae.</p>
      </div>
      </div>
    </>
  );
};

export default Slug;
