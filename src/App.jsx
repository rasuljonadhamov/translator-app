import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Routes/Home";
import LikedTexts from "./components/Liked/Liked";

function App() {
  return (
    <div>
      

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/liked-texts" component={LikedTexts} />
      </Routes>
    </div>
  );
}

export default App;
