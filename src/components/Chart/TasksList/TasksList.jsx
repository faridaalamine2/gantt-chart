import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { openDialog } from "../../../redux/dialogSlice";

function TasksList({ projectId }) {
    const tasks = useSelector((state) => state.tasks);
    const filterTasks = tasks.filter((task) => {
        return task.projectId === projectId;
    });
    const dispatch = useDispatch();

    const handleOpenDialog = (e) => {
        dispatch(openDialog({ action: "addTask" }));
    };

    const renderTasks = filterTasks.map((task) => (
        <Task task={task} key={task.id} />
    ));
    return (
        <div>
            <div className="tasks-list">
                <button className="add-task-button" onClick={handleOpenDialog}>
                    add task +
                </button>
                <div className="tasks">{renderTasks}</div>
            </div>
        </div>
    );
}

export default TasksList;
