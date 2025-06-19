import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  const handleKeypress = (e) => {
    const target = e.target;
    const value = target.textContent;
    const tag = target.tagName;
    if (value == "C") {
      setInput("");
      setOutput(null);
    } else if (value == "=") {
      if (input == "") setOutput("Error");
      else setOutput(Math.round(eval(input)));
    } else if (tag === "BUTTON") setInput((prev) => prev.concat(value));
  };

  return (
    <article className="app">
      <main>
        <h1>React Calculator</h1>
        <input type="text" value={input} readOnly />
        <div>{output}</div>
        <section className="keypad" onClick={handleKeypress}>
          <section className="btn-section">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">+</button>
          </section>

          <section className="btn-section">
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">-</button>
          </section>

          <section className="btn-section">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">*</button>
          </section>

          <section className="btn-section">
            <button type="button">C</button>
            <button type="button">0</button>
            <button type="button">=</button>
            <button type="button">/</button>
          </section>
        </section>
      </main>
    </article>
  );
};

export default App;
