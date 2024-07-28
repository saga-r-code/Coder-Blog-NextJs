import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center items-center m-auto bg-white/20 backdrop-blur-md border border-white/30  rounded-b-md shadow-lg">
        <ul className="flex p-3 gap-12 font-bold m-2">
          <Link href="/">
            <li className="text-white hover:text-slate-400 hover:underline text-[17px]">Home</li>
          </Link>
          <Link href="/About">
            <li className="text-white hover:text-slate-400 hover:underline text-[17px]">About</li>
          </Link>
          <Link href="/Blog">
            <li className="text-white hover:text-slate-400 hover:underline text-[17px]">Blog</li>
          </Link>
          <Link href="/Contact">
            <li className="text-white hover:text-slate-400 hover:underline text-[17px]">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
