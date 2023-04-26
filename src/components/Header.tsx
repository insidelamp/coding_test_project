import React from "react";
import "../styles/Header.css";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { IoMdHome, IoMdClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className="HeaderWrapper">
      <div className="IconSpace">
        <ImArrowLeft className="IconStyle" />
        <ImArrowRight className="IconStyle" />
        <IoClose className="IconStyle " />
        <IoMdHome className="IconStyle" />
      </div>
      <div className="inputSpace">
        <input className="headerInput" />
      </div>
      <div className="searchSpace">
        <FaSearch />
        <div></div>
      </div>
    </div>
  );
}

export default Header;
