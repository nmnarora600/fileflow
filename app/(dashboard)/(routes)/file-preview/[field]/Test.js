"use client"
import { app } from '@/firebaseConfig'
import { getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';
import { SquareArrowLeft } from 'lucide-react';

import Link from 'next/link'
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

function Test({setSecurePassword}) {
    const params=useParams();
    const db=getFirestore(app);
    const slug=params.field
    const[file, setFile]=useState(null);
 
    useEffect(()=>{
        params.field && getFileData();
    },[])
    const getFileData=async()=>{
        const docRef = doc(db, "uploadedFile", slug);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
         
          
          setFile(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          toast.error(`Data not exist`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         
            });
        }
    }
   
  return (
    <div>
      <Link
        href="/upload"
        className="md:pt-16 md:pb-3 py-2 px-3 md:pl-10 tracking-widest flex font-semibold "
      >
        <SquareArrowLeft className="hover:fill-black hover:text-white hover:border-black hover:scale-125 scale-110 hover:rounded-full " />{" "}
        &nbsp; go to Upload
      </Link>
      <div className="md:mx-16 flex md:flex-row flex-col md:p-2 p-2 justify-center items-center min-h-[60vh] space-y-8 md:space-y-0">
        <FileInfo file={file} />
        <FileShareForm file={file} setMainPassword={setSecurePassword} />
      </div>
    </div>
  );
}

export default Test;
