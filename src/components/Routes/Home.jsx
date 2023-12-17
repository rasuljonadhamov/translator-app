import { useState } from "react";
import Translator from "../Translator/Translator";

function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme === "dark" ? "dark-theme" : ""}`}>
      <button className="btn btn-toggle-theme theme-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <Translator />
    </div>
  );
}

export default Home;
