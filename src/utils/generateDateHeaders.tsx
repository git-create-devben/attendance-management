import {startOfMonth, format, endOfMonth, eachDayOfInterval, getDay} from "date-fns"

export const generateDateHeaders = (selectedMonth: Date) => {
    const start = startOfMonth(selectedMonth);
    const end = endOfMonth(selectedMonth);
    const dates = eachDayOfInterval({start, end}).filter((date) => {
    
        const dayOfWeek = getDay(date)
        return dayOfWeek !== 0 && dayOfWeek !== 6;
    });

    return {
        headers: dates.map((date) => ({
            accessorKey: format(date, "yyyy-MM-dd"),
            header: format(date, "MMM d"),
        })),
        dates: dates.map(date => format(date, "yyyy-MM-dd"))
    };
}

