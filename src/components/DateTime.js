import React from 'react';

const DateTime = (props) => {
    const {date} = props;
    return (
        <p className="date">{date}</p>
    );
}

const doPrettyDate = (date) => {
    const inputDate = new Date(date);
    const currentDate = new Date();
    const diffInMinutes = Math.abs(currentDate - inputDate) / 1000 / 60;
    let dateText;

    if (diffInMinutes > 60 * 24) {
        dateText = Math.round (diffInMinutes / 60 / 24) + " дней назад";
    }
    else if (diffInMinutes > 60) {
        dateText = Math.round(diffInMinutes / 60) + " часов назад";
    }
    else if (diffInMinutes >= 1) {
        dateText = Math.round(diffInMinutes) + " минут назад";
    }
    else if (diffInMinutes < 1) {
        dateText = "Менее минуты назад";
    }

    return dateText
}

const withPretty = Component => ({ ...props }) => (
    <Component date={doPrettyDate(props.date)} />
);

export default withPretty(DateTime);