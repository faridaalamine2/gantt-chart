import React from "react";
import Day from "./Day";

const dayWidth = 30;
function Month({ month }) {
    const styles = {
        width: `${month.days * dayWidth}px`,
    };
    const renderDays = Array.from({ length: month.days }, (_, i) => {
        return <Day dayIndex={i} dayNum={i + month.startDay} key={i} />;
    });
    return (
        <div>
            <div className="month" style={styles}>
                <div>{month.name}</div>
                <div className="days">{renderDays}</div>
            </div>
        </div>
    );
}

export default Month;
