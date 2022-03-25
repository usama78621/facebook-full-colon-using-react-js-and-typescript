import React, { useState } from "react";
import {  BiSearch } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import './Nav.css';

 const LeftNav = () => {
  let [value, setValue] = useState<boolean>(true);
  const handleClick=()=>{
     setValue(!value)

  }
  return (
    <div className="left_sidebar">
      
      <BsFacebook color="#4267B2" fontSize="3rem" />
      <div onClick={()=>handleClick()}  className={value ? "search" : "active-hg"}>
        <input className="input" type="search" placeholder="Facebook Search" /> 
      <BiSearch  className="icon"/> 
      </div>
    </div>
  );
};
export default LeftNav;
