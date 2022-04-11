function cutDate(date) {
    let newDate=date.substring(8,10);
    let newMonth=date.substring(4,8);
    let newYear=date.substring(0,4);
    return [newDate, newMonth, newYear];
}

export default cutDate;