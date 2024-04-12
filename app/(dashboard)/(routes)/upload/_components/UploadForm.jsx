"use client"
import React, {  useState } from 'react'
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import { X } from 'lucide-react';
import ProgressBar from './ProgressBar';

function UploadForm({uploadFile, progress, setProgress}) {
   
    const[file, setFile]=useState(null);
    const[showError, setShowError]=useState(false);

    const handleUpload=async(e)=>{
        e.preventDefault();
       
        if(file)
        await uploadFile(file);
    
    
    }

    const OnFileSelect=(file)=>{

if(file && file.size>(1024*5*1024)){
    setShowError(true);
    return
}
setShowError(false)
setFile(file)
    }
  
  return (
    <div className='text-center'>
    <div className="flex items-center justify-center w-full">
       {!file &&  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer  dark:bg-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 bg-blue-50 relative">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-12 h-12 mb-4 text-blue-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <div className="mb-2 text-sm flex-col justify-center md:text-xl text-gray-500 dark:text-gray-400">
                    <div className="font-semibold text-primary">Click to upload </div> 
                    <div className='text-center'>or</div> 
                    <div><strong className='text-primary'>drag</strong> and <strong className='text-primary'>drop</strong></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. Size: 5 MB)</p>
            </div>
            <input id="dropzone-file"  type="file" className="hidden" onChange={(e)=>OnFileSelect(e.target.files[0])}/>
        </label>}
            {file && <div className=' flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg  dark:bg-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 bg-blue-50 relative '>  <X onClick={(e)=>{e.stopPropagation();setFile(null)}} className='cursor-pointer absolute z-50 top-4 right-4'/><FilePreview file={file}/></div>}
    </div> 
    {!showError && <div className='h-5'/>}
    <div className={ `h-10 ${showError?'visible':'invisible'}`}>
{showError && <AlertMsg msg={"Max file size is 5MB"}/>}

    </div>
  
    {(progress<=0 )?<button disabled={file==null} className='p-2 bg-primary text-white hover:bg-blue-600 md:w-[20%] w-[40%] rounded-lg mt-5 disabled:bg-gray-300' onClick={handleUpload}>Upload</button>:<ProgressBar progress={progress}/>}
    

    
    </div>
  )
}

export default UploadForm