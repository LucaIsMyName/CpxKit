/**
 * Time
 * @description Time utility functions
 * @example
 * Time.now;
 * Time.nowIn(-5);
 * Time.days;
 * Time.daysShort;
 * Time.months;
 */
export const Time = {
  now: new Date(),
  nowIn: function (timezone: number = 0) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * timezone);
    return nd;
  },
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};
