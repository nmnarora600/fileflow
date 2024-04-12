"use client"
import { getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image"
import { app } from '@/firebaseConfig';
import { Eye, EyeOff} from 'lucide-react';
import Link from 'next/link'
import { useParams } from 'next/navigation';
import NotFoud from './not-found'


function DTest({handleDisabled}) {
    const params= useParams();

    const [trialPassword, setTrialPassword] = useState("");
    const [exist, setExist] = useState(0);
    const [url, setUrl] = useState("");
    const [disable, setDisable] = useState(true);
    const [hovered, setHovered] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [file, setFile] = useState('');
    const db=getFirestore(app);
    const slug=params.file

const checkPassword=async()=>{
  
  if(file){
    document.title='FileFlow | ' +file.fileName
    try {
 if(file.password.length>0){
      if(await handleDisabled(file.password , trialPassword)==true){
        setDisable(false);
     
      }
      else{
        setDisable(true);
       
      }
 }
  else
  setDisable(false)
    } catch (error) {
      console.log("error", error)
    }
   
  }
}
    useEffect(()=>{
      checkPassword();
    },[file, trialPassword, disable])

    const getFileData=async()=>{
        const docRef = doc(db, "uploadedFile", slug);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
      setExist(1)
          setUrl(file.fileUrl)
          setFile(docSnap.data());
         
        } else {
          // docSnap.data() will be undefined in this case
        setExist(2)
          return <h4> No Document Exist</h4>
        }
    }
useEffect(()=>{
    setUrl(file.fileUrl)
},[file])

    useEffect(()=>{
        params.file && getFileData();
    },[])
  
  
  
    const handleFileNameChange = (e) => {
        setTrialPassword(e.target.value);
        
      };
    
  return (
  <>  {exist==1 && <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Download File</h1>
      <div className='flex justify-center'>

      <Image src="/download.jpg" width={300} height={300} alt='download'/>
      </div>
      {file && file.password.length>0?
        <div ><p className="text-lg mb-4 text-center">Enter the password below to download the file:</p>

      <div className='relative flex'>  
        <input
        type={showPassword?"text":"password"}
        value={trialPassword}
        onChange={handleFileNameChange}
        placeholder="Enter file password"
        className="border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:border-blue-500 w-full"
      />{showPassword?<EyeOff className="right-3 bg-white absolute top-2" onMouseUp={()=>setShowPassword(false)} />: <Eye className="right-3 bg-white absolute top-2" onMouseDown={()=>setShowPassword(true)}/>}
      
      </div>
      </div>:
        <p className="text-lg mb-4 text-center">Click the button below to download the file:</p>
        }
        {/* file && (file.password!=trialPassword) */}
      <button disabled={disable} href={url || "#"}  onContextMenu={(e)=>e.preventDefault()} className={`flex justify-center text-center disabled:opacity-50 disabled:cursor-not-allowed w-full `}>

      {disable  ? <Link href={ '#'}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full relative overflow-hidden transition-transform transform `}
        
        
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
      >
         Download File

      </Link>:
      <Link href={url || '#'} target='_blank' download
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full relative overflow-hidden transition-transform transform `}
        
        
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
      >
         Download File

      </Link>}
      </button>
     
    </div>
  </div>}
{exist==2 && <NotFoud/>}
  
</>
  )
}

export default DTest