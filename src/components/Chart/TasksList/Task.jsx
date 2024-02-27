/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import editIcon from "../../../icons/edit-icon.png";
import { openDialog } from "../../../redux/dialogSlice";
import { truncateString } from "../../../utilities/utilityFunctions";

function Task({ task }) {
    const dispatch = useDispatch();
    const handleOpenDialog = () => {
        dispatch(openDialog({ action: "editTask", data: task }));
    };
    return (
        <div className="task" style={{ color: task.color }}>
            <div className="title">{truncateString(task.title, 8)}</div>
            <div className="edit-button" onClick={handleOpenDialog}>
                <img src={editIcon} className="icon"></img>
            </div>
        </div>
    );
}

export default Task;
