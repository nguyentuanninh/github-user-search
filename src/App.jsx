import { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MainSection from "./components/MainSection";
import User from "./components/User";
import About from "./components/About";

function App() {
    return (
        <div className="w-full h-screen overflow-hidden flex flex-col justify-between">
            <div className="px-6 sm:px-16 py-3 flex items-center justify-center bg-primaryLight dark:bg-secondaryDark">
                <Navbar></Navbar>
            </div>
            <div className="px-6 sm:px-16 h-full flex items-center justify-center dark:bg-primaryDark">
                <Routes>
                    <Route path="/" element={<MainSection />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <div className="px-6 sm:px-16 flex items-center justify-center bg-secondaryLight dark:bg-secondaryDark">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
