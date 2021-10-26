import logo from './174857.png';
import './App.css';

function App() {
  const main = <main><h2>Este e meu main</h2></main>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nathalia Vieira
        </p>
        <p>
          Aluna Certified Tech Developer 2021-2023
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/nathalia-vieira93/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </header>
      {main}
    </div>
    
  );
}

export default App;
