import { useSelector } from "react-redux";
import Chart from "../components/Chart/Chart";
import TasksList from "../components/Chart/TasksList/TasksList";
import Dialog from "../components/Dialog/Dialog";
import "../styling/chart-page.scss";

function ChartPage() {
    const projectId = useSelector((state) => state.currentProject.project.id);
    return (
        <div className="chart-page">
            <TasksList projectId={projectId} />
            <Chart />
            <Dialog projectId={projectId} />
        </div>
    );
}

export default ChartPage;
