import "./NavBarLink.css";

export const NavBarLink = ({ text, icon }) => {
  return (
    <div>
      <li className="nav-item">
        <a href="/" className="nav-links">
          <div className="nav-links__text-container">
            <p className="nav-links__text">{text}</p>
          </div>
          <div className="nav-links__icon">{icon}</div>
        </a>
      </li>
    </div>
  );
};
