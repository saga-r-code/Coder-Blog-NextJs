import Navbar from "@/Components/Navbar";
import Image from "@/Components/Image";
import Link from "next/link";

// This component is automatically a server component
//SERVER SIDE RENDERING fetchBlog()

// Static Generation with ISR
export const revalidate = 60;

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

  // Generates static paths for each blog post by using the slugs
export async function genrateStaticParams(params) {

  const blogs = await fetchBlog()
  return blogs.map((blog) =>{
    slug: blog.slug //return a map of params and get slug
  })
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
