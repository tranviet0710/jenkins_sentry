import logo from './logo.svg';
import './App.css';
const getFile = () => { throw new Error('There is a problem from broken button') };
function App() {
  return (
    <div className="App">
      <button onClick={getFile}> Broken Button </button>
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
          Learn React
        </a>
      </header>

    </div>
  );

}

export default App;
