"use client"
import React, { useState } from 'react'
import UploadForm from './_components/UploadForm'
import {app} from "@/firebaseConfig"
import { getStorage,ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import {useUser} from "@clerk/nextjs"
import uniqueString from 'unique-string';
import {toast} from 'react-toastify'
import { useRouter } from 'next/navigation';

function Upload() {
  const {user}= useUser();
  const[progress,setProgress]=useState(0);

  
   
  //Initializing DB and Storage
   const storage = getStorage(app);
   const db = getFirestore(app);

   const router=useRouter();

  //  onsubmit function
  const uploadFile=async(file)=>{
    const metadata = {
      contentType: file?.type
    };
    const storageRef=ref(storage,'uploads/'+file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   
    setProgress(prog)
    prog==100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
   
      saveInfo(file,downloadURL)
    });
  })
}

// Saving File Data to Firebase
  const saveInfo=async(file, fileUrl)=>{
    const docId=uniqueString().slice(0,11);
   
    
    await setDoc(doc(db, "uploadedFile", docId), {
     fileName:file.name,
     fileSize:file.size,
     fileType:file.type,
     fileUrl:fileUrl,
     userEmail:user.primaryEmailAddress.emailAddress,
     userName:user.fullName,
     password:'',
     id:docId,
     shortUrl:process.env.NEXT_PUBLIC_BASE_URL+'/f/'+docId,
     createdAt:serverTimestamp(),
     updatedAt:serverTimestamp(),

    });
    toast.success('File uploaded successfully', {
      position: "top-right",
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
   
      });
      
     
    router.push('/file-preview/'+docId)

  }
  return (<div className='flex relative flex-col '>
    
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'> Start <strong className='text-primary'>Uploading</strong> files and <strong className='text-primary'>Share</strong> it</h2>
      <UploadForm uploadFile={uploadFile} progress={progress} /></div>
  </div>
  )
}

export default Upload 