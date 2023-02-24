import React, { useEffect } from "react";
import "amazon-connect-streams";

const Connectccp = () => {
  useEffect(() => {
    const container = document.getElementById("ccp");
    window.connect.core.initCCP(container, {
      ccpUrl: "https://outbounddialercapability.my.connect.aws/ccp-v2/",
      loginPopupAutoClose: true,
      softphone: {
        allowFramedSoftphone: true,
      },
      pageOptions: {
        enableAudioDeviceSettings: true,
        enablePhoneTypeSettings: true,
      },
      loginPopup: true,
      region: "us-east-1",
      softphone: {
        allowFramedSoftphone: true,
      },

      loginOptions: {
        // optional, if provided opens login in new window
        autoClose: true, // optional, defaults to `false`
        height: 600, // optional, defaults to 578
        width: 400, // optional, defaults to 433
        top: 0, // optional, defaults to 0
        right: 0, // optional, defaults to 0
      },
    });
  }, []);
  return (
    <div
      id="ccp"
      style={{
        position: "absolute",
        top: 150,
        right: 700,
        height: 600,
        width: 400,
      }}
    ></div>
  );
};

export default Connectccp;
