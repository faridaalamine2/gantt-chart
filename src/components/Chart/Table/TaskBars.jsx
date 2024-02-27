import { useSelector } from "react-redux";
import TaskBar from "./TaskBar";

function TaskBars({ projectId }) {
    const tasks = useSelector((state) => state.tasks);
    const filterTasks = tasks.filter((task) => {
        return task.projectId === projectId;
    });
    const renderTaskBars = filterTasks.map((task, i) => (
        <TaskBar task={task} key={i} />
    ));
    return <div className="task-bars">{renderTaskBars}</div>;
}

export default TaskBars;
