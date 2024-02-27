import React from "react";
const dayWidth = 30;
function Background({ projectDuration }) {
    //const weekWidth = dayWidth * 7;
    const numberOfWeeks = Math.floor(projectDuration / 7);
    const renderWeeks = Array.from({ length: numberOfWeeks }, (_, i) => {
        return <div className="week" key={i}></div>;
    });
    return <div className="background">{renderWeeks}</div>;
}

export default Background;
