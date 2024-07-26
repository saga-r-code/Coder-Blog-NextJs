import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
       <nav className="flex justify-center items-center">
          <ul className="flex p-5 gap-12 font-bold  m-2">
            <Link href='/'><li>Home</li></Link>
            <Link href='/About'><li>About</li></Link>
            <Link href='/Blog'><li>Blog</li></Link>
            <Link href='/Contact'><li>Contact</li></Link>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
