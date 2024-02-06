import dotenv from "dotenv";
dotenv.config();

const base = "https://api.neynar.com/";
const apiKey = process.env.NEYNAR_API_KEY;

// Fetches cast information by hash
async function getCastInfoByHash(hash) {
  const url = `${base}v2/farcaster/cast?identifier=${hash}&type=hash`;
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      api_key: apiKey,
    },
  });
  const cast = await response.json();
  return cast;
}

// Fetch user info by fid
async function getUserInfoByFid(fid) {
  const url = `${base}v1/farcaster/user?fid=${fid}`;
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      api_key: apiKey,
    },
  });
  const user = await response.json();
  return user;
}

// Fetch user info by username
async function getUserInfoByUsername(username) {
    const url = `${base}v1/farcaster/user-by-username?username=${username}`;
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        api_key: apiKey,
      },
    });
    const user = await response.json();
    return user;
  }




  //call functions
  (async () => {
    try {
      const username = "shreyas-chorge";
      const userInfo = await getUserInfoByUsername(username);
      console.log("User Information:", userInfo);
    } catch (error) {
      console.error("Error:", error);
    }
  })();