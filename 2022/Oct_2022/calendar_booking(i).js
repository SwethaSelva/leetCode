/**
 * https://leetcode.com/problems/my-calendar-iii/
 */
var MyCalendarThree = function() {
  this.calendar = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
  let count = 0;
  this.calendar.push([start, end]);
  for (let i = 0; i < this.calendar.length; i++) {
    if (
      (this.calendar[i][0] <= start && this.calendar[i][1] >= start) ||
      (this.calendar[i][0] <= end && this.calendar[i][1] >= end)
    ) count += 1;
  }
  this.calendar.sort((a,b) => a[0] - b[0]);
  console.log(this.calendar)
  return count;
};

function generateOpr (oprArr, valArr) {
  var obj = new MyCalendarThree();
  for (let i = 1; i < oprArr.length; i++) {
    let oprFunc = oprArr[i];
    console.log(obj[oprFunc](...valArr[i]));
  }
}

generateOpr(
  ["MyCalendarThree", "book", "book", "book", "book", "book", "book"],
  [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
);