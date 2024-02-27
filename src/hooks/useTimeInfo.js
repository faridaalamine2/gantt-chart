import { calculateEndDate, getMonths } from "../utilities/utilityFunctions";

const useTimeInfo = (project) => {
    const startDate = new Date(project.startDate);
    const duration = project.duration;
    const endDate = calculateEndDate(startDate, duration);

    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    function getMonthsStartYear() {
        let months;
        if (startYear === endYear)
            months = getMonths(startDate, endDate, startYear, true);
        else {
            const lastDateOfYear = new Date(`12-31-${startYear}`);
            months = getMonths(startDate, lastDateOfYear, startYear);
        }
        return months;
    }

    function getMonthsEndYear() {
        const firstDateOfYear = new Date(`1-1-${endYear}`);
        const months = getMonths(firstDateOfYear, endDate, endYear, true);
        return months;
    }
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
        if (year === startYear) {
            years.push({
                year,
                months: getMonthsStartYear(),
            });
        } else if (year === endYear) {
            years.push({
                year,
                months: getMonthsEndYear(),
            });
        } else {
            const firstDate = new Date(`1-1-${year}`);
            const lastDate = new Date(`12-31-${year}`);
            const months = getMonths(firstDate, lastDate, year);
            years.push({
                year,
                months,
            });
        }
    }
    return {
        years,
    };
};

export default useTimeInfo;
