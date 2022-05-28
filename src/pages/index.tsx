import styles from "../styles/Home.module.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import History from "./History";

const App = () => {
  console.log("render App");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="history" element={<History />} />
      <Route path="settings" element={<Home />} />
    </Routes>
  );
};
export default App;
