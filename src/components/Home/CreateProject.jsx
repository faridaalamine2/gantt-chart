import { useDispatch } from "react-redux";
import { openDialog } from "../../redux/dialogSlice";

function CreateProject() {
    const dispatch = useDispatch();
    const handleOpenDialog = () => {
        dispatch(openDialog({ action: "addProject" }));
    };
    return (
        <div className="create-project">
            <button className="new-project-button" onClick={handleOpenDialog}>
                Create New Project +
            </button>
        </div>
    );
}

export default CreateProject;
