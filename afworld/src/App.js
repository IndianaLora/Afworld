import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="welcome">
        <h1>Bienvenido a AfWorld</h1>
      </div>

      <header className="App-header">
        <img
          src="https://previews.123rf.com/images/vectordivider/vectordivider1609/vectordivider160900259/63397327-a-f-vintage-initials-symbol-letters-a-f-ampersand-surrounded-floral-ornament-wedding-or-business-par.jpg"
          className="App-logo"
          alt="logo"
        />
        <p>Hola Amy ☻</p>
        <a
          className="App-link"
          href="https://laresinaepoxi.com/resina-epoxi-manualidades-guia-joyeria/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende mas de las resinas
        </a>
      </header>
    </div>
  );
}

export default App;
