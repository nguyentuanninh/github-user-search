import React from "react";

const About = () => {
    return (
        <div className="flex items-start flex-col">
            <h1 className="font-poppins font-medium text-[40px] sm:text-[50px] dark:text-white">
                Github User Search
            </h1>
            <h2 className="font-poppins font-normal text-[20px] dark:text-white">
                This is a React Application to search GitHub user's profiles and
                list their profile details.
            </h2>
            <p className="font-poppins font-light text-[18px] dark:text-white mt-6">
                Version : 1.0.0.0
            </p>
            <p className="font-poppins font-light text-[18px] dark:text-white">
                Designed By : Nguyen Tuan Ninh
            </p>
        </div>
    );
};

export default About;
