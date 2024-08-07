import fs from "fs/promises"; // Import the promises API from the fs module

 // import crypto from "crypto"; // Import crypto for generating random bytes
 // const uniqueFileName = `${crypto.randomBytes(16).toString("hex")}.json`; for the unique file name genrate

//http://localhost:3000/api/contact 
export async function POST(request ) {
    try {
        const details = await request.json() 
        const data = await fs.readdir("contactdata")
        // console.log(data)
       
        const user = await fs.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(details))
       console.log(details)
        return new Response(
          JSON.stringify({ message: "POST method", body: details }), {
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        
    } catch (error) {
        return new Response(
          JSON.stringify({ message: "Please check code", error: error }), {
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
    }
   
  }
 
//http://localhost:3000/api/contact 
  
  export async function GET() {
    return new Response(JSON.stringify({ message: "GET Method" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
   