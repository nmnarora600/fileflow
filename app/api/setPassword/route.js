const bcrypt= require('bcrypt')

export async function POST(Request) {
  try {
    const details=await Request.json();
  const {ptext}=details;
  
 
    return Response.json({success: mailresp})

  } catch (error) {
    console.log("got error",error)
    return Response.json({ error });
  }
}
