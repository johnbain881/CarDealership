fetch("http://localhost:8088/cars")
.then(response => response.json())
.then(car => {
    return car.reduce((totalProfit, car) => {
        return totalProfit += car.gross_profit
    }, 0)
},
)
.then(profit => console.log(profit))

fetch("http://localhost:8088/cars")
.then(response => response.json())
.then(car => {
    return car.map(car => {
        return car.purchase_date[5] + car.purchase_date[6]
    })
})
.then(dates => dates.sort())
.then(dates => {
    let numDates = [getNumDates(dates, "01"), getNumDates(dates, "02"), getNumDates(dates, "03"), getNumDates(dates, "04"), getNumDates(dates, "05"), getNumDates(dates, "06"), getNumDates(dates, "07"), getNumDates(dates, "08"), getNumDates(dates, "09"), getNumDates(dates, "10"), getNumDates(dates, "11"), getNumDates(dates, "12"), ]
    console.log(numDates)
    return numDates
})
.then(dates => {
    let highestMonth = 0;
    let previousHighestDate = dates[0]
    for (let i = 1; i < dates.length; i++) {
        if (dates[i] > previousHighestDate) {
            highestMonth = i;
            previousHighestDate = dates[i]
        }
    }
    return highestMonth;
})
.then(previousDate => {
    console.log(previousDate)
})


function getNumDates(arr, value) {
    let counter = 0;
    arr.forEach(val => {
        if (val === value) {
            counter++;
        }
    }
    )
    return counter
    
}


