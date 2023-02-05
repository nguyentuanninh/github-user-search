import React from "react";
import { logo } from "../assets/index";

function Navbar() {
    return (
        <nav className="w-full flex justify-between items-center">
            <img src={logo} alt="logo" className="w-[142px]" />
            <ul className="flex justify-end items-center list-none flex-1">
                <li className="font-poppins font-normal cursor-pointer text-[16px] text-white">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
