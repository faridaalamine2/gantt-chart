import React from "react";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../redux/projectsSlice";
import { deleteTask } from "../../redux/tasksSlice";

function Confirm({ data, closeDialog }) {
    const dispatch = useDispatch();
    const { projectId, taskId } = data;
    const handleDelete = () => {
        if (projectId !== undefined) dispatch(deleteProject({ id: projectId }));
        else if (taskId !== undefined) dispatch(deleteTask({ id: taskId }));
        closeDialog();
    };
    return (
        <div className="confirm">
            <div className="confirm-message">
                Are you sure u want to delete this item? There is no going back!
            </div>
            <div className="buttons">
                <button className="delete" onClick={handleDelete}>
                    Delete
                </button>
                <button onClick={closeDialog}>Cancel</button>
            </div>
        </div>
    );
}

export default Confirm;
