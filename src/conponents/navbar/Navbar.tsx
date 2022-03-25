import React, { FC, useState } from "react";
import './Nav.css';

import LeftNav from "./LeftNav";
import MainNav from "./MainNav";
import Rigth from "./Rigth";

 const Navbar = () => {
  const [change, setChange] = useState<boolean>(true);

  const hanleClick = () => {
    setChange(!change);
  };
  return (
      <nav className="navbar">
        <LeftNav />
        <MainNav hanleClick={hanleClick} change={change} />
        <Rigth/>
      </nav>
  );
};
export default Navbar;

