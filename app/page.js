"use client";
import React from "react";
import Navbar from "@/Components/Navbar";
import Image from "../Components/Image";

const page = () => {
  return (
    <div>
      <Image />
      <Navbar />
      <style jsx>
        {`
          .heading {
            color: red;
          }
        `}
      </style>
      <div className="blog-contain p-10 container md:w-1/2 m-auto text-[#FAF9F6]">
        <h1 className=" text-5xl text-center font-bold underline-offset-4 decoration-4 underline text-slate-400">
          Coder Blog
        </h1>
        <div className="popular-blog my-16 flex justify-center items-center flex-col">
          <h2 className="text-3xl font-bold text-slate-300 ">Popular Blog</h2>
          <div className="blog m-7 flex flex-col gap-2">
            <h3 className="text-xl font-semibold">
              How to learn JavaScript in 2024
            </h3>
            <p className="text-slate-400">
              JavaScript is the language used to design logic for the web page
            </p>
          </div>
          <div className="blog  m-7 flex flex-col gap-2">
            <h3 className="text-xl font-semibold ">
              How to learn JavaScript in 2024
            </h3>
            <p>
              JavaScript is the language used to design logic for the web page
            </p>
          </div>
          <div className="blog m-7 flex flex-col gap-2  ">
            <h3 className="text-xl font-semibold">
              How to learn JavaScript in 2024
            </h3>
            <p>
              JavaScript is the language used to design logic for the web page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
