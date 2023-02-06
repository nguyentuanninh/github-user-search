import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
    return (
        <div className="w-full h-screen overflow-hidden flex flex-col justify-between">
            <div className="px-6 sm:px-16 py-3 flex items-center justify-center bg-secondaryLight dark:bg-secondaryDark">
                <Navbar></Navbar>
            </div>
            <div className="px-6 sm:px-16 h-full flex items-center justify-center dark:bg-primaryDark">
                <Search></Search>
            </div>
            <div className="px-6 sm:px-16 flex items-center justify-center bg-secondaryLight dark:bg-secondaryDark">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
