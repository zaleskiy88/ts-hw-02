/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

function isWeekend(day: string): boolean {
  if (day === Weekdays.SATURDAY || day === Weekdays.SUNDAY) {
    return true;
  }
  return false;
}

isWeekend(Weekdays.MONDAY);
