import React from "react";
import ButtonNav from "./ButtonNav";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full h-auto flex lg:flex-col lg:gap-y-3 lg:justify-center justify-between items-center lg:py-2">
      <div className="lg:w-full h-auto rounded-lg">
        <NavLink to="/" className="flex items-center">
          <ButtonNav buttonText={"About Us"} buttonIcon={<FaRegUser />} />
        </NavLink>
      </div>
      <div className="lg:w-full h-auto">
        <NavLink to="/portfolio" className="flex items-center">
          <ButtonNav
            buttonText={"Portfolio"}
            buttonIcon={<MdOutlineWorkOutline />}
          />
        </NavLink>
      </div>

      <div className="lg:w-full h-auto">
        <NavLink to="/service" className="flex items-center">
          <ButtonNav buttonText={"Services"} buttonIcon={<FaCogs />} />
        </NavLink>
      </div>

      <div className="lg:w-full h-auto">
        <NavLink to="/resume" className="flex items-center">
          <ButtonNav buttonText={"Resume"} buttonIcon={<FaFileAlt />} />
        </NavLink>
      </div>
      <div className="lg:w-full h-auto">
        <NavLink to="/contact" className="flex items-center">
          <ButtonNav buttonText={"Contact"} buttonIcon={<MdOutlineMail />} />
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
