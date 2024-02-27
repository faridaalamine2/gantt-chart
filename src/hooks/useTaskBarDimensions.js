import { useSelector } from "react-redux";
import { calculateDaysBetweenDates } from "../utilities/utilityFunctions";

const useTaskBarDimensions = (startDate, endDate, duration) => {
    const project = useSelector((state) => state.currentProject.project);
    const { startDate: projectStartDate, endDate: projectEndDate } = project;
    //if task is out of limit
    if (
        new Date(startDate) < new Date(projectStartDate) ||
        new Date(endDate) > new Date(projectEndDate)
    )
        return { left: 0, width: 0 };
    const dayWidth = 30;
    const startDay = calculateDaysBetweenDates(startDate, projectStartDate);
    return {
        left: `${startDay * dayWidth}px`,
        width: `${duration * dayWidth}px`,
    };
};
export default useTaskBarDimensions;
