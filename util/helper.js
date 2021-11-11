export function getDates (startDate, endDate) {
    const dates = [];
    let year, month, day, dateFormat;
    let currentDate = startDate;
    const addDays = function (days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }
    while (currentDate <= endDate) {
      year = currentDate.getFullYear();
      month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
      day = String(currentDate.getDate()).padStart(2, '0');
      dateFormat = `${year}-${month}-${day}`;
      dates.push(dateFormat);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
}