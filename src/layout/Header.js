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
          <a href="https://www.buymeacoffee.com/matouio" rel="noreferrer" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
