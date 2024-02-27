import useTimeInfo from "../../../hooks/useTimeInfo";
import { useSelector } from "react-redux";
import Year from "./Year";
import "../../../styling/timeline.scss";

function Timeline() {
    const project = useSelector((state) => state.currentProject.project);
    const { years } = useTimeInfo(project);
    const renderYears = years.map((year) => (
        <Year year={year} key={year.year} />
    ));
    return (
        <div className="timeline">
            <div className="years">{renderYears}</div>
        </div>
    );
}

export default Timeline;
