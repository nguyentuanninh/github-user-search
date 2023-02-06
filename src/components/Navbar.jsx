import React from "react";
import { useState } from "react";
import { logoDark, logoLight } from "../assets/index";

function Navbar() {
    const [mode, setMode] = useState(false);

    return (
        <nav className="w-full flex justify-between items-center">
            <div className="flex flex-1 flex-row items-center justify-start gap-3 sm:gap-5">
                <img
                    src={mode ? logoDark : logoLight}
                    alt="logo"
                    className="w-[70px] sm:w-[90px] "
                />
                <p className="font-poppins font-bold cursor-pointer text-[16px] sm:text-[26px] dark:text-tertiaryLight">
                    Github User Search
                </p>
            </div>

            <ul
                className="justify-end items-center list-none flex-1 sm:flex gap-10 md:gap-20 mr-5 md:mr-10"
                hidden
            >
                <li>
                    <div>
                        <input
                            type="checkbox"
                            className="checkbox"
                            id="checkbox"
                            onChange={() => {
                                document.documentElement.classList.toggle(
                                    "dark"
                                );
                                setMode(prev => !prev);
                            }}
                        />
                        <label htmlFor="checkbox" className="label">
                            <i className="fas fa-moon"></i>
                            <i className="fas fa-sun"></i>
                            <div className="ball" />
                        </label>
                    </div>
                </li>
                <li className="font-poppins font-medium cursor-pointer text-[20px] sm:text-[26px] dark:text-white">
                    <a href="#">Home</a>
                </li>
                <li className="font-poppins font-medium cursor-pointer text-[20px] sm:text-[26px] dark:text-white">
                    <a href="#">About</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
