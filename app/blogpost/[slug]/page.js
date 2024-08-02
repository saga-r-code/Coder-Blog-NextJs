// http://localhost:3000/api/getblog?slug=javascript

"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "@/Components/Image";
import Navbar from "@/Components/Navbar";

const Slug = () => {
  const [blog, setBlog] = useState(null);
  const params = useParams();  // Access route parameters immediately

  useEffect(() => {
    const showBlog = async () => {
      const slug = params.slug; // Get the slug from the URL parameters
      if (!slug) return; // Return if slug is not available

      try {
        const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
        const response = await data.json();
        // console.log(response); //show in terminal
        setBlog(response);
      } catch (error) {
        console.log("Failed to fetch blog", error);
      }
    };

    showBlog();
  }, [params.slug]); //if true than run

  return (
    <>
      <Image />
      <Navbar />
      <div className="javascript-page  w-9/12  mx-auto">
        <div className="text-center py-16 text-white  gap-5 flex justify-center items-center flex-col">
          {blog ? (
            <>
              <h1 className="text-4xl font-semibold ">{blog.title}</h1>
              <p>{blog.content}</p>
            </>
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Slug;
