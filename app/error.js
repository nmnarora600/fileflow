"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFoud() {
  return (
    <div className='h-screen flex-col items-center'>
        <div className='w-full flex flex-col justify-center items-center h-full'>
        <Image src='/error.jpg' width={500} height={200} className='mix-blend-color-burn' alt='error'/>
<h3 className='text-xl my-3 font-semibold'>Oops, Some Error Occured</h3>
        <Link href={'/'} className='px-6 py-3 bg-primary rounded-lg text-white text-center'>Back to Home</Link>
        </div>
    </div>
  )
}

export default NotFoud