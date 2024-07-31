import fs from "fs/promises"; // Import the promises API from the fs module
export async function GET() {
  try {
    // Asynchronously read the JSON file
    // const data = await fs.readFile("blogdata/nextjs.json", "utf-8"); //data show
    const data = await fs.readdir("blogdata"); //show folder using readdir

    // Parse the JSON data
    // const JsonData = JSON.parse(data); //store data on jsonData
    console.log(data); //show data as file formated /folder show

    // Return the parsed JSON data in the response
    return new Response(JSON.stringify(data), { // to show data as json formate //data show the folder
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } 
  catch (error) {
    console.log(error);
    // Return an error response if the file reading fails
    return new Response(JSON.stringify({ error: "Failed To Read File" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
