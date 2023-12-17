import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Routes/Home";
import LikedTexts from "./components/Liked/Liked";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/liked-texts" element={<LikedTexts />} />
      </Routes>
    </div>
  );
}

export default App;
