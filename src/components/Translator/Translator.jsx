import { useState } from "react";
import "./Translator.css";

function Translator() {
  const [translatedText, setTranslatedText] = useState("");
  const [outputLang, setOutputLang] = useState("ar");
  const [inputLang, setInputLang] = useState("uz");
  const [inputText, setInputText] = useState("");

  const translate = () => {
    console.log(outputLang);
    const url =
      "https://google-translate1.p.rapidapi.com/language/translate/v2";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",

        "X-RapidAPI-Key": "2897b51a3amshe30e9647c4cd34ep1f4de4jsn1425aa745979",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: new URLSearchParams({
        q: `${inputText}`,
        target: outputLang,
        source: inputLang,
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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
            <select
              name="languages"
              id="languages"
              className="form-select form-select-sm"
              onChange={(e) => setInputLang(e.target.value)}
            >
              <option value="uz">Uzbekcha</option>
              <option value="en">English</option>
              <option value="fr">France</option>
              <option value="ru">Russia</option>
            </select>

            <textarea
              className="text-box"
              placeholder="Enter text (Select a languange)"
              onChange={(e) => {
                setInputText(e.target.value);
                console.log(inputText);
              }}
            ></textarea>
          </form>
        </div>
        <div className="ranslator-container output-lan">
          <div className="top-row">
            <select
              name="languages"
              id="languages"
              className="form-select form-select-sm"
              onChange={(e) => setOutputLang(e.target.value)}
            >
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="fr">France</option>
              <option value="ru">Russia</option>
            </select>
          </div>
          <p className="text-box output-box">
            {translatedText === "" ? (
              <span className="output-placeholder">Select a language</span>
            ) : (
              translatedText
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Translator;
