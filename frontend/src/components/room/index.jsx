import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Roompage = () => {
  const { roomId } = useParams();

  const mymeeting = async (element) => {
    const appId = 950458125;
    const serverSecret = "a58730efb94a250cd1738dfda52083ec";
    const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Empower Education"
    );

  const zc = ZegoUIKitPrebuilt.create(KitToken);

   zc.joinRoom({
    container:element,
    sharedLinks:[{
        name:'Copy Link',
        url:`http://localhost:3000/room/${roomId}`
    }],
    scenario:{
        mode: ZegoUIKitPrebuilt.OneONoneCall,
    }
   })

  };

  return (
    <>
      <div>
        <div ref={mymeeting} />
      </div>
    </>
  );
};

export default Roompage;
