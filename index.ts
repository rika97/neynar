// index.ts

import { NeynarAPIClient, isApiErrorResponse } from "@neynar/nodejs-sdk";
import { AxiosError } from "axios";
import dotenv from "dotenv"; // Import dotenv package

// Load environment variables from .env file
dotenv.config();

// Retrieve your API key from the environment variables
const apiKey = process.env.NEYNAR_API_KEY;

if (!apiKey) {
  console.error("API key not found in the .env file.");
  process.exit(1); // Exit the application if the API key is missing
}

// Instantiate the client using the API key
const client = new NeynarAPIClient(apiKey);

(async () => {
  try {
    // 19960 (Required*) => fid of user  we are looking for
    // 191 (Optional) => fid of the viewer
    // Get more info @ https://docs.neynar.com/reference/user-v1
    const user = await client.lookupUserByFid(19960, 191);

    // Stringify and log the response
    console.log(JSON.stringify(user));
  } catch (error) {
    // isApiErrorResponse can be used to check for Neynar API errors
    if (isApiErrorResponse(error)) {
      console.log("API Error", error.response.data);
    } else {
      console.log("Generic Error", error);
    }
  }
})();
