import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContextOne, getintl } from "./hook/useIntel";
import Header from "./component/header";

// TODO: 删掉
const moduleMap = {
  "/v1/dokypay": "dokypay",
  "/v1/dokypay/status": "dokypay",
  "/v1/vip": "vip_gir",
  "/v1/lollipop": "rose",
  "/v1/lollipop/history": "rose",
  "/v1/amateur-anchor": "amateur_anchor",
  "/v1/draw": "draw",
  "/v1/facevalue": "facevalue",
  "/v1/facevalue/[id]": "facevalue",
  "/v1/facevalue/app": "facevalue",
  "/v1/facevalue/crop": "facevalue",
  "/v1/onmic": "onmic",
  "/v1/voice-friend/like-list": "voice_friend_gir",
  "/v1/voice-friend": "voice_friend_gir",
  "/v1/new-amature": "newamature"
};

function App() {
  // [A]
  let { state, dispatch } = React.useContext(ContextOne);
  getintl(
    dispatch,
    moduleMap,
    "/v1/new-amature",
     "m_girgir",
    "zh",
  );
  console.log("messages", state.messages);
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        {/* {state.messages} */}
        <Header />
      </div>
    </React.Fragment>
  );
}

export default App;
