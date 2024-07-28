"use client"
import React from 'react'
import Navbar from '@/Components/Navbar'
import Image from '@/Components/Image'
import Link from "next/link";


const About = () => {
  return (
    <>
      <Image />
      <Navbar />
      <div className="md:w-1/2 m-auto" >
      <div className="text-slate-400  my-6 mx-3 bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg  border-white/20 border p-8">
      <section>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold p-5">
            <u>About Coder Blog</u>
          </h1>
          <p className="mt-4 text-lg">
          Welcome to Coder Blog! We are a community of developers and enthusiasts of technology whose learning exercise is a lifelong process through code. For the working expert and enthusiast, we provide tip on programming trends and the advances in software architecture.
          </p>
          <p className="mt-4 text-lg">
          Knowledge sharing is highly appreciated at Coder Blog. The content we have is from enthusiastic developers and is meant to motivate and assist you in solving coding problems. We develop conducive conditions for learning and development.
          </p>
          <p className="mt-4 text-lg">
          Thank you for visiting! Visit our articles, leave a comment, and be a member of our discussions. Happy coding!
          </p>
        </div>
      </section>


      <div className="flex justify-end items-end p-2 my-14">
        <footer className="footer text-sm ">
          <p>&copy; 2024 TextUtils. All rights reserved.</p>
          <p>
            Designed and developed by&nbsp;
            <Link
              href="https://github.com/saga-r-code"
              className="cursor-pointer"
              target="_blank"
            >
              <b>
                <u>Sagar Shah</u>
              </b>
            </Link>
          </p>
        </footer>
      </div>
    </div>
</div>
    </>
  )
}

export default About
