import React from "react";
import {
  BsFillClockFill,
  BsFillHouseDoorFill,
  BsFlagFill,
  BsSave2,
} from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";

import { MdDynamicFeed, MdOutlineOndemandVideo } from "react-icons/md";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Usersprofile from "../userPorfileimage/UserProfile";
import "./Main.css";


const Leftside = () => {
  return (
    <main>
      <div className="letft">
        <ul>
            <li>
              <Usersprofile fisrtName="usama " lastName="khan" />
            </li>
            <Router>
              <li>
                <NavLink to="/friends">
                  <FaUserFriends />
              <span>friends</span>    
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <MdDynamicFeed />
                 <span>Feed</span> 
                </NavLink>
              </li>
              <li>
                <NavLink to="/marketplace">
                  <BsFillHouseDoorFill />
                <span>marketplace</span>  
                </NavLink>
              </li>
              <li>
                <NavLink to="/pages">
                  <BsFlagFill />
                  <span>pages</span> 
                </NavLink>
              </li>
              <li>
                <NavLink to="/vidoes">
                  <MdOutlineOndemandVideo />
                 <span>vidoes</span> 
                </NavLink>
              </li>
              <li>
                <NavLink to="/memories">
                  <BsFillClockFill />
                 <span>memories</span> 
                </NavLink>
              </li>
              <li>
                <NavLink to="/groups">
                  <GrGroup /> 
                <span>groups</span>  
                </NavLink>
              </li>
              <li>
                <NavLink to="/saved">
                  <BsSave2 /> 
                  <span>saved</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/saved">
                  <BsSave2 /> 
                  <span>saved</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/saved">
                  <BsSave2 /> 
                  <span>saved</span>
                </NavLink>
              </li>
            </Router>
        </ul>
          </div>
    </main>
  );
};

export default Leftside;
