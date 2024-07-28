import React from 'react'

const Image = () => {
  return (
    <div>
      <div className="imagewrapper fixed -z-10 w-[100vw] h-[100vh] ">
        <img src="/background-image.avif" alt="" className="w-[100vw] h-[100vh] object-cover"/>
      </div>
    </div>
  )
}

export default Image
