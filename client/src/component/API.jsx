//Auth token we will use to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI1M2MwYjIzYy03MzE2LTRiZmMtODkzMy03NzczNjQ1NjkyNTciLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwMDAwMzA2NiwiZXhwIjoxNzAwNjA3ODY2fQ.1FS3mSEOo-CT2ymwv8ViRmRsOfmrM7P5isxlz-g3_eE";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      "authorization": `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};



// d603050f-6be0-40dc-a832-cfddf6d151b4