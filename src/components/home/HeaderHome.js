import { useState } from "react";

const HeaderHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="headerhome">
      <div className="navbar">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={"navbar__burger " + isOpen}
        >
          <span class="navbar__burger--line"></span>
          <span class="navbar__burger--line"></span>
          <span class="navbar__burger--line"></span>
        </button>
      </div>
      <h1>HUGO RENIAUME</h1>
      <nav className={"menu " + isOpen}>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">A propos</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderHome;
