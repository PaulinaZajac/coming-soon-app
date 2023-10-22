import '../components/App.css';
import pingLogo from '../images/logo.svg';
import desktopImage from '../images/illustration-dashboard.png';

function App() {
  return (
    <div className="page-container">
      <header className="page-header">
        <img src={pingLogo} alt="ping-logo" className="logo"></img>
        <h2>
          We are launching <b>soon!</b>
        </h2>
      </header>
      <main>
        <div className="input-container">
          <div>
            <label for="email">Subscribe and get notified</label>
          </div>
          <div>
            <input
              type="email"
              className="input"
              id="email"
              placeholder="Your email adress..."
              required
            ></input>
          </div>
          <div>
            <button className="button">Notify me</button>
          </div>
        </div>
        <img src={desktopImage} alt="desktop" className="desktop-image"></img>
      </main>
      <footer className="page-footer">
        <div className="icons-container">
          <i class="fa-brands fa-facebook fa-lg"></i>
          <i class="fa-brands fa-twitter fa-lg"></i>
          <i class="fa-brands fa-instagram fa-lg"></i>
        </div>
        © Copyright Ping. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
