import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/Components/Templates/Home";
import InfoDetailsCity from "./Components/Templates/InfoDetailsCity";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weathercity" element={<InfoDetailsCity />} />
      </Routes>
    </div>
  );
}

export default App;
