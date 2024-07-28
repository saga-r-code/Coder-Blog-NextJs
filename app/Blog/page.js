import React from 'react'
import Navbar from '@/Components/Navbar'
import Image from '@/Components/Image'
import Link from 'next/link'


const Blog = () => {
  return (
    <div>
      <Image />
      <Navbar />  
      <div className="popular-blog my-16 flex justify-center items-center flex-col text-white">
          <h2 className="text-3xl font-bold text-slate-300 ">Popular Blog</h2>
          <div className="blog m-7 flex flex-col gap-2">
            <Link href={'/learn-javascript'}><h3 className="text-xl font-semibold">How to learn JavaScript in 2024</h3></Link>
            <p className="text-slate-400">
              JavaScript is the language used to design logic for the web page
            </p>
          </div>
        </div>
    </div>
  )
}

export default Blog
