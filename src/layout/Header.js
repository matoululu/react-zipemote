import logo from '../logo.svg';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
          <h1>ZipEmote</h1>
        </div>
        <div className="link-container">
          <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="matouio" data-color="#feffff" data-emoji="❤️" data-font="Arial" data-text="Support ZipEmote" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#FFDD00" ></script>
        </div>
      </div>
    </header>
  );
}

export default Header;
