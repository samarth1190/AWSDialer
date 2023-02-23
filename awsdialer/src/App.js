import logo from "./logo.svg";
import "./App.css";
import Dialer from "./pages/Dialer";
import Connectccp from "./components/Connectccp";

function App() {
  return (
    <div
      style={{
        backgroundImage: "url(/HIP1.jpg)",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Connectccp></Connectccp>
    </div>
  );
}

export default App;
