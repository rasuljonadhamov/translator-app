function LikedTexts() {
  const likedTexts = JSON.parse(localStorage.getItem("likedTexts")) || [];

  return (
    <div className="liked-texts-container">
      <h2>Liked Translations</h2>
      {likedTexts.map((text, index) => (
        <div key={index} className="liked-text-item">
          <p>{text.text}</p>
          <span className="likes-count">{text.likes} Likes</span>
        </div>
      ))}
    </div>
  );
}

export default LikedTexts;
