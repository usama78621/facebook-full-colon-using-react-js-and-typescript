import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { MdNotificationsActive, MdOutlineArrowDropDown } from "react-icons/md";
import Usersprofile from "../userPorfileimage/UserProfile";
import "./Nav.css";

const Rigth = () => {
  const [butto, setButto] = useState<boolean>(true);
  const handleChange = () => {
    setButto(!butto);
  };

  return (
    <div className="rigth_sidebar">
      <Usersprofile fisrtName="usama" lastName="" />

      <button>
        <CgMenuGridO />
      </button>

      <button>
        <AiOutlineMessage />
      </button>

      <button>
        <MdNotificationsActive />
      </button>

      <button onClick={handleChange}>
        <MdOutlineArrowDropDown />
      </button>
    </div>
  );
};

export default Rigth;
