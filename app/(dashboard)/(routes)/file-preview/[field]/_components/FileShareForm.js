"use client";
import React, { useEffect, useState } from "react";
import {toast} from 'react-toastify'
import { Save ,Copy, Check, Eye, EyeOff} from 'lucide-react';
import Image from 'next/image'
function FileShareForm({file,setMainPassword}) {
  const [check, setCheck] = useState(false);
  const [url, setUrl] = useState('');
  const [copy, setCopy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const[userName,setUserName]=useState('')
  const[receiver, setReceiver]=useState('')
  const[sending, setSending]=useState(false);
 
  
 const onSave=async(e)=>{
  await setMainPassword(password);
  toast.success(`File Successfully Encrypted`, {
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

  useEffect(() => {
    if(file ){
        setUrl(file.shortUrl)
        setUserName(file.userName);
        if(file.password){
          setPassword(file.password)
        }
     
 
    }    

  }, [file]);

useEffect(()=>{

},[password, receiver])
useEffect(()=>{
setTimeout(() => {
setCopy(false)

}, 600);

},[copy==true])

const onCopy=(e)=>{
  setCopy(true)
  navigator.clipboard.writeText(url)
}


const sendMail=async()=>{
  setSending(true)
  if(receiver==''){
    toast.error(`Enter receiver's email`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
   
      });
      setSending(false)
   
      return;
  }
  const r= await fetch('/api/send',{
    method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
    body:JSON.stringify({userName:file.userName,shortUrl:file.shortUrl, receiver})})
    const res=await r.json();
    toast.success(`Mail sent to ${receiver}`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
   
      });
      setReceiver('');
      setSending(false)
   
}

  return (
    <div className="flex-col space-y-8 md:w-1/3 w-full">
      {/* <form action="#" className=""> */}

      {/* fileurl */}
      <label
        htmlFor="fileurl"
        className="relative flex h-11 rounded-md border w-full border-gray-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600  items-center "
      >
        <input
          type="text"
          id="fileurl"
          className="peer border-none bg-transparent px-2 w-full placeholder-transparent h-11  focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="File Url"
          value={url}
          readOnly
        />
{copy==true?<Check className="right-3 cursor-pointer bg-white absolute z-40"/>:
<Copy className="right-3 cursor-pointer bg-white absolute z-40" onClick={onCopy}/>}
        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2  px-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs bg-white">
          File Url 
        </span>
      </label>

      {/* set password */}
      <div className="w-full">
        <div className="flex items-center mb-1 w-full ">
          <input
            type="checkbox"
            value={check}
            onChange={(e) => setCheck(!check)}
          />
          <span className="text-sm">&nbsp; Enable Password?</span>
        </div>
<div  className={` flex  w-full  items-center `}>
        <label
          htmlFor="password"
          className={`relative flex rounded-md border h-11 w-full border-gray-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 items-center  ${
            check ? "" : "opacity-0 border-gray-200"
          }`}
        >
          {showPassword?<EyeOff className="right-3 bg-white absolute" onMouseUp={()=>setShowPassword(false)} />: <Eye className="right-3 bg-white absolute" onMouseDown={()=>setShowPassword(true)}/>}
         
          <input
            type={showPassword?"text":"password"}
            id="password"
            className="peer border-none bg-transparent  h-11 px-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            disabled={!check}
            onKeyPress={(e) => {
              if(e.key==='Enter')
             
                onSave();
              } }
          />

          <span
            className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs disabled:opacity-0 ${
              check ? "" : "opacity-75"
            }`}
          >
            Password
          </span>
        </label>
        <div className="ml-2 sm:flex sm:items-center sm:gap-4">
          <button disabled={ !check || password.length==0} className={`inline-block shrink-0 rounded-md border disabled:hover:bg-blue-600  disabled:hover:text-white border-blue-600 bg-blue-600 p-2 text-sm font-medium text-white  transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 disabled:${check&&password.length===0?'opacity-40':'opacity-0'}`} >
            <Save onClick={onSave}/>
          </button>
        </div>
        </div>
      </div>
      <div className=" md:block hidden h-[0.1rem]"/>
      {/* send mail */}
      <div className="rounded-lg  w-full border border-gray-300 p-5 space-y-2">
<p className="">Send File via Email</p>
     
      <label
        htmlFor="sendmail"
        className="relative block rounded-md border w-full border-gray-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="email"
          id="sendmail"
          className="peer border-none bg-transparent h-11 px-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          value={receiver}
          onChange={(e)=>setReceiver(e.target.value)}
          placeholder="Email"
          onKeyPress={(e) => {
            if(e.key==='Enter')
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(receiver)) {
              sendMail();
            } else {
              // Handle invalid email address
             
              toast.error('Please enter a valid email address.', {
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
          }}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Email
        </span>
      </label>

      
      <div className=" w-full sm:flex sm:items-center sm:gap-4">
        <button disabled={sending} className="disabled:cursor-not-allowed inline-block shrink-0 w-full rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500" onClick={sendMail}>
          {sending?'Sending...':'Send mail'
          }
        </button>
      </div>
      </div>
      {/* </form> */}
    </div>
  );
}

export default FileShareForm;
