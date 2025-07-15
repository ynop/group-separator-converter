import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const GS_CHAR = String.fromCharCode(29);
  const translatedText = inputText.replace(/<GS>/g, GS_CHAR);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-2">GS Translator</h1>
      <p className="mb-4 text-center text-gray-700">
        Enter text containing &lt;GS&gt; tags. The output shows the text with
        &lt;GS&gt; replaced by the Group Separator character.
      </p>
      <textarea
        className="w-full max-w-lg p-2 border border-gray-400 rounded mb-4"
        rows={12}
        placeholder="Enter text with <GS> tags"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="w-full max-w-lg p-2 border border-gray-400 rounded bg-white">
        <h2 className="text-lg font-semibold mb-2">Translated Output:</h2>
        <pre className="whitespace-pre-wrap break-words">{translatedText}</pre>
      </div>
    </div>
  );
}

export default App;
