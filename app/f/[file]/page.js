
import React from 'react'
const bcrypt= require('bcrypt');

import DTest from './DTest';
function DownloadPage({params}) {
  const handleDisabled=async(hashPassword, givenPassword)=>{
    "use server"
 

    try {
      // "use server"
 

      // Use bcrypt.compare inside an async function
      const result = await bcrypt.compare(givenPassword, hashPassword);
     
      return result;
    } catch (error) {
      
      return false; // or handle the error according to your application logic
    }
   }
  return (
   <DTest handleDisabled={handleDisabled}/>
  )
}

export default DownloadPage