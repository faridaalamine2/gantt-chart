import React from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../../redux/dialogSlice";
import "../../styling/dialog.scss";
import ProjectForm from "./NewProjectForm";
import TaskForm from "./TaskForm";
import Confirm from "./Confirm";

const actions = {
    addTask: { title: "new task", component: TaskForm },
    editTask: { title: "edit task", component: TaskForm },
    addProject: { title: "new project", component: ProjectForm },
    editProject: { title: "edit project", component: ProjectForm },
    confirm: { title: "confirm", component: Confirm },
};
function Dialog({ projectId }) {
    const dialog = useSelector((state) => state.dialog);
    const dispatch = useDispatch();
    if (!dialog.open) return;

    const action = dialog.action;
    const CurrComponent = actions[action].component;
    const handleCloseDialog = () => {
        dispatch(closeDialog());
    };
    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={handleCloseDialog}></div>
            <div className="dialog">
                <div className="title">{actions[action].title}</div>
                <CurrComponent
                    closeDialog={handleCloseDialog}
                    projectId={projectId}
                    data={dialog.data}
                />
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default Dialog;
