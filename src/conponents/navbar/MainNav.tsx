import React, { FC } from 'react'
import { AiFillHome, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './Nav.css'
interface MainNavProps{
  hanleClick:() => void
  change:boolean
}

const MainNav:FC<MainNavProps>= ({hanleClick,change}) => {
  return (
       
            <ul className="main-nav">
          <Router>
              <li>
                <NavLink
                  to="/"
                  onClick={hanleClick}
                  className={"cn " + (change ? "active-io" : "")}
                >
                  <AiFillHome />
                </NavLink>
              </li>
              <li>
                <NavLink to="/gorups" className="cn">
                  <AiOutlineUsergroupAdd />
                </NavLink>
              </li>
              <li>
                <NavLink to="/vidoes" className="cn">
                  <MdOutlineOndemandVideo />
                </NavLink>
              </li>
              <li>
                <NavLink to="/friends" className="cn">
                  <FaUserFriends />
                </NavLink>
              </li>
          </Router>
            </ul>
  )
}

export default MainNav