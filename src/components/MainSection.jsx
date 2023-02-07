import React from "react";
import { useState, useEffect } from "react";

import Card from "./Card";
import Search from "./Search";
//https://api.github.com/users/nguyentuanninh
//https://api.github.com/users/nguyentuanninh/repos?page=1&per_page=10&sort=updated

const MainSection = () => {
    const [items, setItems] = useState();
    const [users, setUsers] = useState("");
    const getData = data => {
        setUsers(data);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(
                `https://api.github.com/search/users?q=${users}`
            );
            const data = await res.json();
            setItems(data);
        };
        fetchUsers();
    }, [users]);
    {
        console.log(items);
    }
    return (
        <div className="w-3/5 flex flex-col items-center justify-center">
            <div className="w-3/5">
                <Search onSubmit={getData} />
            </div>

            <div>{users !== "" ? <Card {...items} /> : ""}</div>
        </div>
    );
};

export default MainSection;
