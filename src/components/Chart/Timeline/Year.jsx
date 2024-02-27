import React from "react";
import Month from "./Month";

function Year({ year }) {
    const renderMonths = year.months.map((month, i) => {
        return <Month month={month} key={i} />;
    });
    return (
        <div className="year">
            <div>{year.year}</div>
            <div className="months">{renderMonths}</div>
        </div>
    );
}

export default Year;
