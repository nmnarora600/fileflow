import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <>
    <section className="flex items-center">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        <span className='text-primary'> Upload, Save </span>
        and easily <span className='text-primary'>Share</span> your files in one place
        
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-500">
       Drag and drop your file directly to our cloud and share it with your friends securely with password and send it on email.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/upload"
        >
          Get Started
        </Link>

        <a target='_blank'
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-blue-700 focus:outline-none focus:ring active:text-primary sm:w-auto"
          href="https://namanarora.in" 
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Hero