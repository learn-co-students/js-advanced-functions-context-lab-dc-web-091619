/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Your code here
function createEmployeeRecord(employeeArray) {
    let employeeObj = {firstName: employeeArray[0], familyName:employeeArray[1], title: employeeArray[2], payPerHour: employeeArray[3], timeInEvents: [], timeOutEvents: []}
    return employeeObj
}

function createEmployeeRecords(arrayOfarrays) {
    return arrayOfarrays.map(employee => {
        return createEmployeeRecord(employee)
    })
}
let createTimeInEvent = function(timeInStr) {
    let [date,hour] = timeInStr.split(' ')

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour,10),
        date: date,

    })

    return this

}

let createTimeOutEvent = function(timeOutStr) {
    let [date, hour] = timeOutStr.split(' ')

    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date,

    })
    return this
}

let hoursWorkedOnDate = function(soughtDate){
    let timeInDate = this.timeInEvents.find(timeIn => {
        return timeIn.date === soughtDate})
    let timeOutDate = this.timeOutEvents.find(timeOut => {
        return timeOut.date === soughtDate})
    return (timeOutDate.hour - timeInDate.hour) / 100
}

let wagesEarnedOnDate = function(soughtDate) {
    let rawWage = hoursWorkedOnDate.call(this,soughtDate) * this.payPerHour
    return parseFloat(rawWage.toString())
}



let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(rec){
        return rec.firstName === firstName
    })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}