import React, { useState } from "react";
import useTaskBarDimensions from "../../../hooks/useTaskBarDimensions";

function TaskBar({ task }) {
    const { startDate, endDate, duration, color } = task;
    const { left, width } = useTaskBarDimensions(startDate, endDate, duration);
    const styles = {
        backgroundColor: color,
        left,
        width,
    };
    return <div key={task.id} className="task-bar" style={styles}></div>;
}

export default TaskBar;
