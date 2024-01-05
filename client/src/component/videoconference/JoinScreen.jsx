// JoinScreen.js
import React, { useState } from "react";
import { BsCameraVideo, BsPeople, BsQuestion } from 'react-icons/bs'

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);

  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      />
      <button onClick={onClick} className='text-black font-semibold text-lg'>Answer Call</button>

      {" or "}
      <button onClick={onClick}>Call Volunteer</button>
    </div>
  );
}

export default JoinScreen;
