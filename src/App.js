import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with env var {process.env.REACT_APP_NOT_SECRET_CODE} or {process.env.APPSETTING_REACT_APP_NOT_SECRET_CODE}
        </a>
      </header>
    </div>
  );
}

export default App;
