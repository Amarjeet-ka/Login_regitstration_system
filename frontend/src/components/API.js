import fetch from 'node-fetch';

export const authToken = "248e58c7-09cd-4182-9e02-37f780ab493c";

// API call to create meeting
export const createMeeting = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};

const options = {
  method: "GET",
  headers: {
    "Authorization": authToken,
    "Content-Type": "application/json",
  },
};

const url = `https://api.videosdk.live/v2/rooms?page=1&perPage=20`;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);
