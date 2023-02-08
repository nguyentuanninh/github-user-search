import React from "react";

const Card = ({ avatar_url, login, id }) => {
    return (
        <div>
            <a
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <img
                    className="object-cover w-full rounded-t-lg h-[110px] md:rounded-none md:rounded-l-lg"
                    src={avatar_url}
                    alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {login}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        id: {id}
                    </p>
                </div>
            </a>
        </div>
    );
};

export default Card;
