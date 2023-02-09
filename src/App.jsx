import { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MainSection from "./components/MainSection";
import About from "./components/About";

function App() {
    return (
        <div className="w-full min-h-screen overflow-hidden flex flex-col justify-between dark:bg-primaryDark">
            <div className="px-6 sm:px-16 py-3 flex items-center justify-center bg-primaryLight dark:bg-secondaryDark ">
                <div className="xl:max-w-[1280px] w-full">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="px-6 sm:px-16 h-full flex flex-col items-center justify-start dark:bg-primaryDark mt-10">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Search />
                                {/* <MainSection /> */}
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <div className="px-6 sm:px-16 flex items-center justify-center bg-secondaryLight dark:bg-secondaryDark mt-10">
                <div className="xl:max-w-[1280px] w-full">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}

export default App;
