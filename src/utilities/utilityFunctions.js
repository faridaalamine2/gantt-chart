import { format } from "date-fns";
function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength) + "...";
    }
}

function calculateDaysBetweenDates(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const timeDifference = Math.abs(secondDate - firstDate);
    const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    return daysDifference;
}

function formatDate(date) {
    return format(date, "yyyy-MM-dd");
}

function calculateEndDate(startDate, duration) {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + Number(duration));
    return endDate;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function getMonths(startDate, endDate, year, isEndYear) {
    //this function returns the months in a project, with number of days in each month
    //logic: the start month is from the first day of the project until the end of this month
    //logic: the months in the middle are entirely covered
    //logic: the end month is from its first day until the last day of the project
    const monthsArray = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const startMonth = startDate.getMonth() + 1;
    const endMonth = endDate.getMonth() + 1;
    const months = [];
    for (let month = startMonth; month <= endMonth; month++) {
        let startDay = 1;
        let days;
        if (month === endMonth) {
            //calculating the days in the end month
            days = endDate.getDate();
            if (isEndYear) days = days - 1;
        } else if (month === startMonth) {
            //calculating the days in the start month
            const daysInMonth = getDaysInMonth(year, startMonth);
            startDay = startDate.getDate();
            days = daysInMonth - startDate.getDate() + 1;
        } else {
            //calculating the days in the middle months
            const daysInMonth = getDaysInMonth(year, month);
            days = daysInMonth;
        }
        if (days > 0) {
            months.push({ name: monthsArray[month - 1], startDay, days });
        }
    }
    return months;
}
export {
    calculateEndDate,
    calculateDaysBetweenDates,
    getMonths,
    formatDate,
    truncateString,
};
