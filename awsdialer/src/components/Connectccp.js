import React, { useRef, useEffect } from "react";
import "amazon-connect-streams";

const Connectccp = (props) => {
  const ref = useRef();
  useEffect(() => {
    try {
      if (typeof window === "undefined") throw new Error("window missing");
      if (typeof window.connect === "undefined")
        throw new Error("global connect missing");
      console.log("init start");
      window.connect.core.initCCP(ref.current, {
        ccpUrl: `https://outbounddialercapability.my.connect.aws/ccp-v2/`,
        region: "us-east-1",
        loginPopup: true,
        //loginUrl:
        //"https://secure-fed.dev.anthem.com/idp/startSSO.ping?PartnerSpId=urn:amazon:webservices1&TargetResource=https://us-east-1.console.aws.amazon.com/connect/federate/048048ad-16f3-4deb-b2fb-7b6195a433a5?destination=/ccp-v2/",
        loginPopupAutoClose: true,
        loginOptions: {
          // optional, if provided opens login in new window
          autoClose: true, // optional, defaults to `false`
          height: 600, // optional, defaults to 578
          width: 400, // optional, defaults to 433
          top: 0, // optional, defaults to 0
          left: 0, // optional, defaults to 0
        },
        softphone: { allowFramedSoftphone: true },
      });
      console.log("init end");
      // var agent = new window.connect.Agent();
      // agent.onStateChange(function (agentStateChange) { console.log(agentStateChange) });
      window.connect.contact(function (contact) {
        contact.onConnected(function (c) {
          props.setTrasnferDisabled(true);
        });
        contact.onACW(function (c) {
          props.setTrasnferDisabled(false);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div
      id="ccp"
      ref={ref}
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
