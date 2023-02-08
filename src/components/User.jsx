import React from "react";
import { useState, useEffect } from "react";

import Loading from "./Loading";

const User = ({ api, toggle }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

    const clickHandler = () => {
        toggle(true);
    };

    useEffect(() => {
        fetch(`${api}`)
            .then(res => res.json())
            .then(
                result => {
                    setIsLoaded(true);
                    setItems(result);
                },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    if (error) {
        console.log(error.message);
    } else if (!isLoaded) {
        return (
            <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <Loading type="spinningBubbles" color="#e51414" />;
            </div>
        );
    }

    //https://api.github.com/users/nguyentuanninh
    return (
        <div
            id="staticModal"
            aria-hidden="true"
            className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 w-3/4 p-4 overflow-x-hidden 
            overflow-y-auto"
        >
            <div className="relative w-full h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 
                            hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center
                         dark:hover:bg-gray-600 dark:hover:text-white fixed top-5 right-5"
                        data-modal-hide="staticModal"
                        onClick={clickHandler}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    <div className="flex flex-col md:flex-row justify-center items-center md:max-w-xl">
                        <img
                            className="object-cover w-auto rounded-lg h-[210px]"
                            src={items.avatar_url}
                            alt=""
                        />
                        <div className="flex flex-1 flex-col items-center md:items-start md:ml-7">
                            <h1 className="font-poppins font-medium text-[26px] sm:text-[36px] dark:text-white text-center">
                                {items.name}
                            </h1>
                            <a href={items.html_url} className="text-green-600">
                                @{items.login}
                            </a>

                            {items.company !== null ? (
                                <div className="flex flex-row items-center mt-2">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-1"
                                    >
                                        <title>organization</title>
                                        <path
                                            d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"
                                            fill="#221F20"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <p className="font-poppins font-normal dark:text-white">
                                        {items.company}
                                    </p>
                                </div>
                            ) : (
                                ""
                            )}

                            {items.location !== null ? (
                                <div className="flex flex-row items-center mt-1">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 12 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-1"
                                    >
                                        <title>location</title>
                                        <path
                                            d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                                            fill="#000"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <p className="font-poppins font-normal dark:text-white">
                                        {items.location}
                                    </p>
                                </div>
                            ) : (
                                ""
                            )}

                            {items.email !== null ? <p>{items.email}</p> : ""}

                            <div className="flex flex-col md:flex-row items-center">
                                <div className="flex flex-col items-center ml">
                                    <p className="font-poppins font-normal dark:text-white">
                                        {items.followers}
                                    </p>
                                    <p className="font-poppins font-normal dark:text-white">
                                        Followers
                                    </p>
                                </div>
                                <div className="flex flex-col items-center ml-4">
                                    <p className="font-poppins font-normal dark:text-white">
                                        {items.following}
                                    </p>
                                    <p className="font-poppins font-normal dark:text-white">
                                        Following
                                    </p>
                                </div>
                                <div className="flex flex-col items-center ml-4">
                                    <p className="font-poppins font-normal dark:text-white">
                                        {items.public_repos}
                                    </p>
                                    <p className="font-poppins font-normal dark:text-white">
                                        Public repos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
