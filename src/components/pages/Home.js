import React from "react";
import "./App.css";
function Home() {
  return (
    <div>
      <div className="welcome-section">
        <h1 className="text-center">Bienvenido a AF World</h1>
        <p className="text-center">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="intro"></div>
    </div>
  );
}

export default Home;
