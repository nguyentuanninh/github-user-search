import React from "react";

const Card = ({ total_count, items }) => {
    if (total_count == 0) {
        return (
            <p
                className="font-poppins font-medium cursor-pointer
             text-[16px] sm:text-[20px] text-red-600 pt-5"
            >
                *Don't find any people
            </p>
        );
    } else if (total_count > 3) {
        items = items.slice(0, 3).map(e => {
            return (
                <div className="p-5 bg-white rounded-lg">
                    <a href="#"></a>
                </div>
            );
        });
    }
    return <div>a</div>;
};

export default Card;
