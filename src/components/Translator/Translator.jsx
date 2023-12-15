import { useState } from "react";

function Translator() {
  const [translatedText, setTranslatedText] = useState("");
  const translate = () => {
    const url =
      "https://google-translate1.p.rapidapi.com/language/translate/v2";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",

        "X-RapidAPI-Key": "b1350477bamsh9fd0f126c02870ep11df03jsn1fd0c3303aaf",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: new URLSearchParams({
        q: "Hello, world!",
        target: "uz",
        source: "en",
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        const { data } = res;
        const { translations } = data;
        const transWord = translations[0].translatedText;
        setTranslatedText(transWord);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="calculator">
      <div className="row-wrapper">
        <div className="translator-container input-lan">
          <div className="top-row">
            <button
              className="btn btn-primary btn-translate"
              onClick={translate}
            >
              Translate
            </button>
          </div>
          <form className="input-form">
            <textarea
              className="tex-box"
              placeholder="Enter text (any languange)"
            ></textarea>
          </form>
        </div>
        <div className="ranslator-container output-lan">
          <div className="top-row">
            <select
              name="languages"
              id="languages"
              className="form-select form-select-sm"
            >
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="fr">France</option>
              <option value="ru">Russia</option>
            </select>
            <p className="text-box output-box">Output Text: {translatedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translator;
