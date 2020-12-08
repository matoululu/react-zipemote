import logo from '../images/zipemote.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo-container">
          <img src={logo} className="header__logo" alt="logo" />
          <h1>ZipEmote</h1>
        </div>
        <div className="header__link-container">
          <a href="https://www.buymeacoffee.com/matouio" rel="noreferrer" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
