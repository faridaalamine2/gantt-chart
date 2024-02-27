import React from "react";
const dayWidth = 30;
function Day({ dayIndex, dayNum }) {
    //each day is a thin vertical line positioned absolutely, its left pushes it to the right position
    const styles = {
        left: `${dayWidth * dayIndex - 2}px`,
    };
    return (
        <div className="day" style={styles}>
            <div className="day-number">{dayNum}</div>
        </div>
    );
}

export default Day;
