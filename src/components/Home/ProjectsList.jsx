/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import editIcon from "../../icons/edit-icon.png";
import { openDialog } from "../../redux/dialogSlice";
import { openProject } from "../../redux/currentProject";
import { Link } from "react-router-dom";
function ProjectsList() {
    const projects = useSelector((state) => state.projects.projects);
    const dispatch = useDispatch();
    const ListItem = ({ project }) => {
        const handleOpenDialog = () => {
            dispatch(openDialog({ action: "editProject", data: project }));
        };

        return (
            <li>
                <div
                    onClick={() => {
                        dispatch(openProject(project));
                    }}
                >
                    <Link to="/chart">{project.title}</Link>
                </div>
                <div className="edit-button" onClick={handleOpenDialog}>
                    <img src={editIcon} className="icon"></img>
                </div>
            </li>
        );
    };
    const renderProjects = projects.map((project) => (
        <ListItem key={project.id} project={project} />
    ));

    return (
        <ul className="projects-list">
            <span>Your projects:</span>
            {renderProjects[0] ? (
                renderProjects
            ) : (
                <div className="placeholder">
                    no recent projects, create a new one
                </div>
            )}
        </ul>
    );
}

export default ProjectsList;
