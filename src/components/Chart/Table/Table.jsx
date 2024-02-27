import { useSelector } from "react-redux";
import TaskBars from "./TaskBars";
import Today from "./Today";
import Background from "./Background";
const dayWidth = 30;

function Table() {
    const project = useSelector((state) => state.currentProject.project);
    if (!project) return;
    const duration = project.duration;
    const styles = {
        width: `${duration * dayWidth}px`,
    };
    return (
        <div className="table" style={styles}>
            <Background projectDuration={duration} />
            <TaskBars projectId={project.id} />
            <Today />
        </div>
    );
}

export default Table;
