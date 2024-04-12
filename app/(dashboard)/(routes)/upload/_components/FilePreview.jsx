import Image from 'next/image'
import React from 'react'

function FilePreview({file}) {
  return (
    <div className='flex items-center justify-center space-x-3'>
        <Image src='/file.png' width={70} height={120} alt='file'/>
        <div className='flex-col items-center '>
        <h2 className='text-left'>{file.name}</h2>
        <h2 className='text-left '><div>{file?.type.slice(0,25)}</div> </h2>
        <h2 className='text-left'><div>{(file.size/1024/1024).toFixed(2)}MB</div></h2>
        </div>
    </div>
  )
}

export default FilePreview