import React from "react";
import style from "./Header.module.css";
import Logo from './../Logo/Logo';

const Header = (props) => {
  return(
    <div className={style.inner}>
      <Logo/>
    </div>
  )
}

export default Header;