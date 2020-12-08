import broadcaster from '../images/broadcaster.png';

function Header(props) {
  return (
    <div className="chat-preview">
      <h2>Chat preview</h2>
      <div className="chat__wrap">
        <ul className="chat--light">
          <li><img src={broadcaster} alt=""/> <span className="name">ZipEmote:</span> Your message will look like:</li>
          <li><img src={broadcaster} alt=""/> <span className="name">ZipEmote:</span> <img className="emote" src={props.emote} alt=""/></li>
        </ul>

        <ul className="chat--dark">
          <li><img src={broadcaster} alt=""/> <span className="name">ZipEmote:</span> Your message will look like:</li>
          <li><img src={broadcaster} alt=""/> <span className="name">ZipEmote:</span> <img className="emote" src={props.emote} alt=""/></li>
        </ul>
      </div>

    </div>
  );
}

export default Header;
