import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainMenu from "@components/MainMenu";
import LanguageSwitcher from "@components/LanguageSwitcher";

const Header: React.FC = () => (
    <header className="header hide-mobile">
      <div className="header__left">
        <Link to="#" className="logo">
          <img src="/images/icons/Logo-main.svg" alt="Logo" />
        </Link>
      </div>
      <div className="header__right">
        {/* <MainMenu /> */}
        <LanguageSwitcher />
      </div>
    </header>
  );

export default Header;
