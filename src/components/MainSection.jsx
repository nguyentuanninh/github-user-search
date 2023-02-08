import React from "react";
import { useState, useEffect } from "react";

import Card from "./Card";
import Search from "./Search";
import Loading from "./Loading";
//https://api.github.com/users/nguyentuanninh
//https://api.github.com/users/nguyentuanninh/repos?page=1&per_page=10&sort=updated

const MainSection = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [users, setUsers] = useState("nguyentuanninh");
    const getData = data => {
        setUsers(data);
    };

    useEffect(() => {
        fetch(`https://api.github.com/search/users?q=nguyen`)
            .then(res => res.json())
            .then(
                result => {
                    setIsLoaded(true);
                    setItems(result.items);
                },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return (
            <div className="mt-6">
                <Loading type="spinningBubbles" color="#e51414" />;
            </div>
        );
    } else if (items == undefined) {
        return (
            <p className="font-poppins font-normal text-[18px] text-red-600 py-[20px]">
                *Don't find any people
            </p>
        );
    } else {
        return (
            <div
                className="mt-5 flex flex-wrap gap-5 items-center justify-center
             max-w-5xl overflow-x-hidden"
            >
                {console.log(items)}
                {items.map((item, index) => {
                    if (index < 30) {
                        return <Card key={index} {...item} />;
                    }
                })}
            </div>
        );
    }
};

export default MainSection;
