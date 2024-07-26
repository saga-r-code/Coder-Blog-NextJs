import React from 'react'
import Navbar from '@/Components/Navbar'
import styles from './home.module.css' 

const page = () => {
  return (
    <>
       <div className="container" >
        <Navbar />
        <div className="blog-contain p-5 ">
          <h1 className="text-5xl text-center font-bold underline-offset-4 decoration-4 underline">Coder Blog</h1>
          <div className="popular-blog my-20 flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold">Popular Blog</h2>
            <div className="blog m-7 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">How to learn JavaScript in 2024</h3>
              <p>JavaScript is the language used to design logic for the web page</p>
            </div>
            <div className="blog m-7 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">How to learn JavaScript in 2024</h3>
              <p>JavaScript is the language used to design logic for the web page</p>
            </div>
            <div className={`blog m-7 flex flex-col gap-2 ${styles.container} `}>
              <h3 className="text-xl font-semibold">How to learn JavaScript in 2024</h3>
              <p>JavaScript is the language used to design logic for the web page</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
