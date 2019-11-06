/* Your Code Here */
function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  function createEmployeeRecords(arrOfArrs) {
    return arrOfArrs.map(employeeArray => createEmployeeRecord(employeeArray))
  }
  
  function createTimeInEvent(dateStamp) {
    const timeInEvent = {
      type: "TimeIn",
      date: dateStamp.split(" ")[0],
      hour: parseInt(dateStamp.split(" ")[1], 10)
    }
    this.timeInEvents.push(timeInEvent)
    return this
  }
  
  function createTimeOutEvent(dateStamp) {
    const timeOutEvent = {
      type: "TimeOut",
      date: dateStamp.split(" ")[0],
      hour: parseInt(dateStamp.split(" ")[1], 10)
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
  }
  
  function hoursWorkedOnDate(dateGiven) {
    const timeIn = this.timeInEvents.find(event => event.date === dateGiven).hour
    const timeOut = this.timeOutEvents.find(event => event.date === dateGiven).hour
  
    return (timeOut - timeIn)/100
  }
  
  function wagesEarnedOnDate(dateGiven) {
    return hoursWorkedOnDate.call(this, dateGiven) * this.payPerHour
  }
  
//   function allWagesFor() {
//     const allDates = this.timeInEvents.map(event => event.date)
//     return allDates.reduce((total, date) => total += wagesEarnedOnDate(this, date), 0)
//   }
  
  function findEmployeeByFirstName(employeeArray, firstname) {
    return employeeArray.find(employeeRecord => employeeRecord.firstName === firstname)
  }
  
  function calculatePayroll(employeeArray) {
    return employeeArray.reduce((total, employeeRecord) => total += allWagesFor.call(employeeRecord), 0)
  }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}