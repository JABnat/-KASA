import logo from './assets/logo.svg';
import './styles/App.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
</style>

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
