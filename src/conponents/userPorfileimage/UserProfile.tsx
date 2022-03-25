import React, { FC } from "react";
import "./userProfile.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import losos from "../navbar/logo.png";
interface userProps {
  fisrtName: string;
  lastName: string;
}
const Usersprofile: FC<userProps> = ({ fisrtName, lastName }) => {
  return (
    <div className="userprofile">
      <Router>
        <Link to="/Profile">
          <img src={losos} alt="thisimage" className="img" />
          <p>{fisrtName + lastName}</p>
        </Link>
      </Router>
    </div>
  );
};

export default Usersprofile;
