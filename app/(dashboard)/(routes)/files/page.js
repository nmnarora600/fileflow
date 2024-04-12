"use client"
import { app } from '@/firebaseConfig'

import {  collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import TabularData from './_components/tabularData/TabularData'
import {useUser} from '@clerk/nextjs'
export default function Files() {
  const[snap, setSnap]=useState([])
  const[load, setLoad]=useState(false);
  const[mail, setMail]=useState('')
  const db=getFirestore(app)
const{user}=useUser();
  
  const q = query(collection(db, 'uploadedFile'), where('userEmail', '==',mail ));

  useEffect(()=>{
getData();
  },[load,mail])
  useEffect(()=>{
if(user && user.primaryEmailAddress){
  setMail(user.primaryEmailAddress.emailAddress);

}
  },[user])
  const getData=async()=>{
    let r= await getDocs(q);
    const newData = r.docs.map(doc => doc.data());
  

    setSnap(newData); // Update state with the modified array
  }

 

  return (
    <div>
      <TabularData snapData={snap} load={load} setLoad={setLoad} key={load}/>
      
    </div>
  )
}
