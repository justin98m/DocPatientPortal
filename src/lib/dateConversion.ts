function dateToUTCNumber(date: Date): number {
  let utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  return utc;
}
function UTCNumberToDate(utc: string): Date {
  return new Date(Number(utc));
}

function dateConversion(date: any, time: any) {
  let year = Number(date.slice(0, 4));
  let month = Number(date.slice(5, 7)) - 1;
  let day = Number(date.slice(9, 11));
  let hour = Number(time.slice(0, 2));
  let minute = Number(time.slice(3, 5));
  console.log(day, year, month, hour, minute);

  let dateObj = new Date(year, month, day, hour, minute);
  let utc = Date.UTC(
    dateObj.getUTCFullYear(),
    dateObj.getUTCMonth(),
    dateObj.getUTCDate(),
    dateObj.getUTCHours(),
    dateObj.getUTCMinutes(),
    dateObj.getUTCSeconds()
  );
  console.log(String(utc));

  return String(utc);
}

export { dateToUTCNumber, UTCNumberToDate, dateConversion };
