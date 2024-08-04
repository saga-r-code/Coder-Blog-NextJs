// This component is automatically a server component
import Navbar from "@/Components/Navbar";
import Image from "@/Components/Image";
import Link from "next/link";

export async function fetchBlog() {
    // Fetch the data from your API endpoint
    const res = await fetch("http://localhost:3000/api/blogs",{
      cache: "no-cache"// Ensures SSR with no caching
    })

    if(!res.ok){
      throw new Error('Failed to fetch data')
    }

    return res.json();
  }


const Blog = async () => {
  const allBlog = await fetchBlog();
  return (
    <div>
      <Image />
      <Navbar />
      <div className="popular-blog my-16 flex justify-center items-center flex-col text-white">
        <h2 className="text-4xl font-bold text-slate-300 mb-5">Popular Blog</h2>
        {allBlog.map((blog) => {
          return (
            <div
              key={blog.title}
              className="blog m-7 flex flex-col justify-center items-center gap-2"
            >
              <Link href={`/blogpost/${blog.slug}`}>
                <h3 className="text-xl font-semibold">{blog.title}</h3>
              </Link>
              <p className="text-slate-400 text-center">
                {blog.content.length > 100
                  ? blog.content.substr(0, 100) + "....."
                  : blog.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default Blog;
