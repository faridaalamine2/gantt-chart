import { useSelector } from "react-redux";
import { calculateDaysBetweenDates } from "../../../utilities/utilityFunctions";

const dayWidth = 30;
function Today() {
    const currentProject = useSelector((state) => state.currentProject.project);
    const today = new Date();

    //project is not in the present
    if (
        today < new Date(currentProject.startDate) ||
        today >= new Date(currentProject.endDate)
    )
        return;

    const todayRelative = calculateDaysBetweenDates(
        currentProject.startDate,
        today
    );
    const styles = {
        left: `${todayRelative * dayWidth}px`,
    };
    return (
        <div className="today" style={styles}>
            <div className="top"></div>
            <div className="text">Today</div>
        </div>
    );
}

export default Today;
