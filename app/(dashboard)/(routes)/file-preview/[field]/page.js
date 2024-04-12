"use server"
import React from 'react'
import Test from './Test';
import { doc, getFirestore, updateDoc ,serverTimestamp} from "firebase/firestore";
import { app } from '@/firebaseConfig';
// const bcrypt= require('bcrypt')

const bcrypt= require('bcrypt');
// import bcrypt from 'bcrypt'

async function FilePreview({params}) {
  const slug=params.field
 
  
    const saltRounds=10;
  //  const db=getFirestore(app)
  
    const setSecurePassword= async(password)=>{
      "use server"
      bcrypt.hash(password, saltRounds, async function(err, hash) {
        if(err)
        console.log(err)
        // Store hash in your password DB.
        else{
         
          const db=getFirestore(app)
          const docRef = doc(db, "uploadedFile", slug);
          await updateDoc(docRef,{password:hash, updatedAt:serverTimestamp()});
          
        }

        
    });
 
      //
    }
   

  return (
    <div>
      <Test setSecurePassword={setSecurePassword}/>
    </div>
  )
}

export default FilePreview