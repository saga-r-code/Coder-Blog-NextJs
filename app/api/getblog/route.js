import fs from "fs/promises"; // Import the promises API from the fs module
import path from "path";
// http://localhost:3000/api/getblog?slug=javascript

export async function GET(request) {
  try {
    // Parse query parameters from the incoming request URL
    const url = new URL(request.url); // Create a URL object from the incoming request URL
    const queryParameters = Object.fromEntries(url.searchParams.entries()); // Convert URLSearchParams to a plain object
    console.log('Query Parameters:', queryParameters); // Log the query parameters for debugging

    // Extract the slug from the query parameters
    const slug = queryParameters.slug;


    // Construct the file path using the slug
    const filePath = path.join('blogdata', `${slug}.json`);

    // Asynchronously check if the file exists and read it
    try {
      const data = await fs.readFile(filePath, "utf-8");
      const jsonData = JSON.parse(data);

      // Return the parsed JSON data in the response
      return new Response(JSON.stringify(jsonData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (fileError) {
      // Return a 404 response if the file is not found
      return new Response(JSON.stringify({ error: 'Blog File not found' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  } catch (error) {
    console.error('Error:', error);
    // Return an error response if there’s a general error
    return new Response("Error to read file",{status: 404})
  }
}
