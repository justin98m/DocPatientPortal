 function dateToUTCNumber(date: Date):number{
    let utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                date.getUTCDate(), date.getUTCHours(),
                date.getUTCMinutes(), date.getUTCSeconds());
    return utc;
}
function UTCNumberToDate(utc: string):Date{
    return new Date(Number(utc));
}

export {
    dateToUTCNumber, 
    UTCNumberToDate
}