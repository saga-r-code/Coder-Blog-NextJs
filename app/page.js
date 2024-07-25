
export default function Home() {
  return (
    <>
      
      <div className="container">
        <nav className="flex justify-center items-center">
          <ul className="flex p-5 gap-12 font-bold  m-2">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>

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
            <div className="blog m-7 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">How to learn JavaScript in 2024</h3>
              <p>JavaScript is the language used to design logic for the web page</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
