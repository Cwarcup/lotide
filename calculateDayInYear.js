function calculateDayInYear(date) {
  const splitDate = date.split('/');
  const year = Number(splitDate[0]);
  const month = Number(splitDate[1]);
  const day = Number(splitDate[2]);

  const isLeapYear = function(year) {
    if (
      (isMultiple(year, 400) && isMultiple(year, 100)) ||
      (!isMultiple(year, 100) && isMultiple(year, 4))
    ) {
      return true;
    }
    return false;
  };

  const daysInFeb = function(year) {
    if (isLeapYear(year)) {
      return 29;
    }
    return 28;
  };

  const DAYS_IN_MONTH = [31, daysInFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const validMonth = function(month) {
    return month && month >= 1 && month <= 12;
  };

  const validDay = function(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1];
  };

  //leap year is good
  const calculateDayNumber = function(month, day) {
    let dayNumber = 0;
    for (let i = 0; i < month - 1; i++) {
      dayNumber += DAYS_IN_MONTH[i];
    }
    dayNumber += day;
    return Number(dayNumber);
  };

  if (year && validMonth(month) && validDay(month, day)) {
    return calculateDayNumber(month, day);
  } else {
    return 'Invalid date';
  }
}

const isMultiple = function(numerator, denominator) {
  return numerator % denominator === 0;
};

module.exports = calculateDayInYear;