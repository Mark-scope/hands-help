import React, { useEffect, useMemo, useRef, useState } from "react";
import {  MeetingProvider,  MeetingConsumer,  useMeeting,  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "../component/API";
import ReactPlayer from "react-player";
import JoinScreen from "../component/videoconference/JoinScreen";
import MeetingView from "../component/videoconference/Meetingview";
import { useLocation, useParams } from "react-router-dom";


function MakeACall() {
  const [meetingId, setMeetingId] = useState(null);
  const {state} = useLocation();
 

  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  // if (state && state.volunteer) {
  //   return <JoinScreen getMeetingAndToken={getMeetingAndToken} />;
  // }

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
    <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken}  className=''/>
    );
}

export default MakeACall;