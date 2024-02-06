import { NeynarAPIClient } from "@neynar/nodejs-sdk";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.NEYNAR_API_KEY;
const client = new NeynarAPIClient(apiKey);

const hash = "0x8ffed4e8fa53c6e22b85f678c9a53067826e846a";
const cast = await client.lookUpCastByHash(hash);
console.log(cast);