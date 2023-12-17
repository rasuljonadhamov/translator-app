import { useState } from "react";
import { Link } from "react-router-dom";

function LikedTexts() {
  const [likedTexts, setLikedTexts] = useState(
    JSON.parse(localStorage.getItem("likedTexts")) || []
  );

  const handleDelete = (index) => {
    const updatedLikedTexts = [...likedTexts];
    updatedLikedTexts.splice(index, 1);
    setLikedTexts(updatedLikedTexts);
    localStorage.setItem("likedTexts", JSON.stringify(updatedLikedTexts));
  };

  return (
    <div className="liked-texts-container">
      <nav>
        <Link to="/" className="home-nav">
          Home
        </Link>
      </nav>
      <h2>Liked Translations</h2>
      {likedTexts.map((text, index) => (
        <div key={index} className="liked-text-item">
          <p>{text.text}</p>
          <button onClick={() => handleDelete(index)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default LikedTexts;
