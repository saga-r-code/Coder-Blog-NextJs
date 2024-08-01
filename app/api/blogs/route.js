import fs from "fs/promises"; // Import the promises API from the fs module
export async function GET() {
  try {
    // Asynchronously read the JSON file
    // const data = await fs.readFile("blogdata/nextjs.json", "utf-8"); //data show
    let data = await fs.readdir("blogdata"); //show folder using readdir
    let myfile;
    let allblogs = [];

    for (let index = 0; index < data.length; index++) {
      //run untill data was end
      const item = data[index]; //store all data
      console.log(item);
      myfile = await fs.readFile("blogdata/" + item, "utf-8"); //item was read as string
      allblogs.push(JSON.parse(myfile)); //convert myfile data as object
    }

    // const JsonData = JSON.parse(data); //store data on jsonData // Parse the JSON data
    // console.log(data); //show data as file formated /folder show

    // Return the parsed JSON data in the response
    return new Response(JSON.stringify(allblogs), {
      //jsonData: to show data as json formate //data:data show the folder //allblogs:allblogs show with contain
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
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
