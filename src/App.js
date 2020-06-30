import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import "./App.css";
import StepTwo from "./components/StepTwo ";

function App() {
  const [affichage, setAffichage] = useState("section");
  const [title, setTitle] = useState("Simple Form");
  const [result, setResult] = useState({});

  return (
    <div className="App">
      <header>
        <Header title={title} />
      </header>

      {affichage === "section" ? (
        <Section
          infos={result}
          onSuccess={(infos) => {
            setAffichage("steptwo");
            setTitle("Results");
            setResult(infos);
          }}
        />
      ) : (
        <StepTwo
          infos={result}
          onEdit={() => {
            setAffichage("section");
            setTitle("Simple Form");
          }}
        />
      )}
    </div>
  );
}

export default App;
