import React, { useEffect } from "react";
import connect from "amazon-connect-streams";

const Connectccp = () => {
  useEffect(() => {
    const container = document.getElementById("ccp");
    connect.core.initCCP(container, {
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
    });
  }, []);

  return <div id="ccp"></div>;
};

export default Connectccp;
