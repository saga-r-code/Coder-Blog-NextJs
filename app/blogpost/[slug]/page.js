// http://localhost:3000/api/getblog?slug=javascript
import Image from "@/Components/Image";
import Navbar from "@/Components/Navbar";

export async function slugBlog(slug) {
  console.log(slug);
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Slug = async ({ params }) => {
  // const [blog, setBlog] = useState(null);
  // const params = useParams(); // Access route parameters immediately

  const { slug } = params; // Extract the slug from the params

  try {
    const blog = await slugBlog(slug); // Fetch the blog data using the fetchBlog function

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
    // try block complete
  } catch (error) {
    <div className="javascript-page w-9/12 mx-auto">
      <div className="text-center py-16 text-white gap-5 flex justify-center items-center flex-col">
        <h1 className="text-4xl font-semibold">Error</h1>
        <p>Failed to fetch blog</p>
      </div>
    </div>;
  }
};

export default Slug;
