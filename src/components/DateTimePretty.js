import React from 'react';

const DateTimePretty = (WrappedComponent) => (props) => {
    const date = new Date(props.date);
    const currentDate = new Date();
    const diffInMinutes = Math.abs(currentDate - date) / 1000 / 60;
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

    return <WrappedComponent date={dateText} />
};

export default DateTimePretty;