import logo from "./logo.svg";
import "./App.css";
import Dialer from "./pages/Dialer";
import Connectccp from "./components/Connectccp";
import React from "react";
import { useCallback } from "react";
import ListUsers from "./components/ListUsers";
import DetailPage from "./components/DetailsPage";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const CCP = useCallback(() => <Connectccp />, []);
  const [ccpopen, setccpOpen] = React.useState(false);
  const handleClick = () => {
    setccpOpen(!ccpopen);
  };

  return (
    <div
      style={{
        backgroundImage: "url(/HIP1.jpg)",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div>
        <button
          style={{
            position: "absolute",
            top: 95,
            right: 700,
            boxShadow: "none",
            backgroundColor: "white",
            border: "none",
            width: 350,
            height: 50,
          }}
          onClick={handleClick}
        >
          <img src="/CCP.PNG" />
        </button>
        {ccpopen && <CCP />}
      </div>
      <ListUsers />

      <Routes>
        <Route path="/" element={<ListUsers />} exact></Route>
        <Route path="/detail/:userId/*" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
