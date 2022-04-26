const week_days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const today_date = new Date();
const today_week = week_days[today_date.getDay()];
const today_month = months[today_date.getMonth()];
const today_day = today_date.getDate();

const TitleDate = () => {
    return `${today_week}, ${today_month} ${today_day}`;
};

export default TitleDate;
