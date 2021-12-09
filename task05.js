function daysToXmas(date) {
    date.setHours(0,0,0,0)
    let christmas_day = new Date('Dec 25, 2021')
    christmas_day.setHours(0,0,0,0)
    let diff = christmas_day.getTime() - date.getTime()
    diff = diff / 60 / 60 / 24 / 1000
    return diff
}

const date1 = new Date('Dec 1, 2021')
console.log(date1, daysToXmas(date1), '// 24') 

const date2 = new Date('Dec 24, 2021 00:00:01')
console.log(date2, daysToXmas(date2), '// 1') 

const date3 = new Date('Dec 24, 2021 23:59:59')
console.log(date3, daysToXmas(date3), '// 1') 

const date3b = new Date('Dec 2, 2021')
console.log(date3b, daysToXmas(date3b), '// 23') 

const date4 = new Date("December 20, 2021 03:24:00")
console.log(date4, daysToXmas(date4), '// 5') 

const date5= new Date('Dec 25, 2021')
console.log(date5, daysToXmas(date5), '// 0') 

const date6 = new Date('Dec 26, 2021')
console.log(date6, daysToXmas(date6), '// -1') 

const date7 = new Date('Dec 31, 2021')
console.log(date7, daysToXmas(date7), '// -6') 

const date8 = new Date('Jan 1, 2022 00:00:01')
console.log(date8, daysToXmas(date8), '// -7') 

const date9 = new Date('Jan 1, 2022 23:59:59')
console.log(date9, daysToXmas(date9), '// -7') 