"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import Image from "@/Components/Image";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        let data = await fetch("http://localhost:3000/api/blogs");
        let response = await data.json();
        console.log(response); //show in browser
        setBlogs(response);
      } catch (error) {
        console.log("Failed to fetch blog", error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div>
      <Image />
      <Navbar />
      <div className="popular-blog my-16 flex justify-center items-center flex-col text-white">
        <h2 className="text-3xl font-bold text-slate-300 ">Popular Blog</h2>
        {blogs.map((blog) => {
          return (
            <div key={blog.title} className="blog m-7 flex flex-col justify-center items-center gap-2">
              <Link href={`/blogpost/${blog.slug}`}>
                <h3 className="text-xl font-semibold">{blog.title}</h3>
              </Link>
              <p className="text-slate-400 text-center">{blog.content.length > 100 ? blog.content.substr(0,100) + "....." : blog.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
