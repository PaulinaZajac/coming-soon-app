import '../components/App.css';
import pingLogo from '../images/logo.svg';

function App() {
  return (
    <div className="page-container">
      <header className="page-header">
        <img src={pingLogo} alt="ping-logo"></img>
        <h2>We are launching soon!</h2>
      </header>
      <main>
        <h3>Subscribe and get notified</h3>
        <input className="input"></input>
        <button className="button">Notify me</button>
      </main>
      <footer className="page-footer">
        © Copyright Ping. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
