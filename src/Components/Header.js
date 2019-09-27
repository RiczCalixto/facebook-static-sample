import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" />
        <div>
          <span>Meu perfil</span>
          <FaUserCircle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
